import { Page } from '@playwright/test';
import { NavbarPage } from './navbarPage';
import { LoginPage } from './loginPage';
import { SignUpPage } from './signUpPage';
import { HomePage } from './homePage';
import { ProductPage } from './productPage';
import { CartPage } from './cartPage';

export class PageManager {

    private readonly page: Page;
    private readonly navbarPage: NavbarPage;
    private readonly loginPage: LoginPage;
    private readonly signUpPage: SignUpPage;
    private readonly homePage: HomePage;
    private readonly productPage: ProductPage;
    private readonly cartPage: CartPage;

    constructor(page: Page) {
        this.page = page;
        this.navbarPage = new NavbarPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.signUpPage = new SignUpPage(this.page);
        this.homePage = new HomePage(this.page);
        this.productPage = new ProductPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    navbar(){
        return this.navbarPage;
    }

    onLoginPage() {
        return this.loginPage;
    }

    onSignUpPage() {
        return this.signUpPage;
    }

    onHomePage() {
        return this.homePage;
    }

    onProductPage() {
        return this.productPage;
    }

    onCartPage() {
        return this.cartPage;
    }
}

