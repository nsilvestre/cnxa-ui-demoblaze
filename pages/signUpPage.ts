import { expect, Page } from '@playwright/test';

export class SignUpPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async signUp(username: string, password: string) {
        await this.page.getByLabel('Username:').fill(username);
        await this.page.getByLabel('Password:').fill(password);
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Sign up successful.');
            await dialog.accept();
        })
        await this.page.getByRole('button', {name: 'Sign up'}).click();
    }

}