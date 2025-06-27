import { Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;   
    }

    async goToPhoneCategory() {
        await this.page.getByRole('link', { name: 'Phones' }).click();
    }

    async goToLaptopsCategory() {
        await this.page.getByRole('link', { name: 'Laptops' }).click();
    }

    async goToMonitorsCategory() {
        await this.page.getByRole('link', { name: 'Monitors' }).click();
    }

    async selectProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).click();
    }

}