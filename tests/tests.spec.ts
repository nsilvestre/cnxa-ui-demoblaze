import {test, expect} from "@playwright/test";
import { PageManager } from "../pages/pageManager";
import { faker } from "@faker-js/faker";
import products from "../test_data/products.json";

const LAPTOP_NAME = products.laptops[0].name 

test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test('Sign up', async ({page}) => {
    const pm = new PageManager(page);

    const username = `AutomationUser${Math.floor(Math.random() * 1000)}`;
    const password = `AutomationPassword${Math.floor(Math.random() * 1000)}`;

    await pm.navbar().goToSignUp();
    await pm.onSignUpPage().signUp(username, password);
    await pm.navbar().goToLogIn();
    await pm.onLoginPage().login(username, password);

    await expect(page.getByRole('link', {name: `Welcome ${username}`})).toBeVisible();
});

test('Add element to cart', async ({page}) => {
    const pm = new PageManager(page);

    await pm.onHomePage().goToLaptopsCategory();
    await pm.onHomePage().selectProduct(LAPTOP_NAME);
    await pm.onProductPage().addToCart();
    await pm.navbar().goToCart();

    await expect(page.locator('table tbody tr').filter({hasText: LAPTOP_NAME})).toBeVisible();
});

test('Complete purchase', async ({page}) => {
    const pm = new PageManager(page);

    const name = faker.person.fullName();
    const country = faker.location.country();
    const city = faker.location.city();
    const card = faker.finance.creditCardNumber();
    const month = faker.date.month();
    const year = faker.date.past().getFullYear().toString();

    await pm.onHomePage().goToLaptopsCategory();
    await pm.onHomePage().selectProduct(LAPTOP_NAME);
    await pm.onProductPage().addToCart();
    await pm.navbar().goToCart();

    await expect(page.locator('table tbody tr').filter({hasText: LAPTOP_NAME})).toBeVisible();

    await pm.onCartPage().placeOrder();
    await pm.onCartPage().fillOrderDetails(name, country, city, card, month, year);
    await pm.onCartPage().confirmOrder();

    const successMessage = `Thank you for your purchase!`;
    await expect(page.getByText(successMessage)).toBeVisible();

    await page.getByRole('button', {name: 'OK'}).click();
});

test.afterEach(async ({ page }) => {
    await page.close(); // Closes the page
    await page.context().close(); // Closes the context (and underlying window)
});