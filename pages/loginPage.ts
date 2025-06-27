import { Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.locator('#loginusername').fill(username);
        await this.page.locator('#loginpassword').fill(password);
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }

}