import { Page } from '@playwright/test';

export class NavbarPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToHome() {
        await this.page.getByRole('link', {name: 'Home'}).click();
    }

    async goToContact() {
        await this.page.getByRole('link', {name: 'Contact'}).click();
    }

    async goToAboutUs() {
        await this.page.getByRole('link', {name: 'About us'}).click();
    }

    async goToCart() {
        await this.page.getByRole('link', {name: 'Cart'}).first().click();
    }

    async goToLogIn() {
        await this.page.getByRole('link', {name: 'Log in'}).click();
    }

    async goToSignUp() {
        await this.page.getByRole('link', {name: 'Sign up'}).click();
    }

}  