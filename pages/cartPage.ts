import { Page } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async placeOrder() {
        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }

    async fillOrderDetails(name: string, country: string, city: string, card: string, month: string, year: string) {
        await this.page.getByRole('textbox', {name: 'Name:'}).fill(name);
        await this.page.getByRole('textbox', {name: 'Country:'}).fill(country);
        await this.page.getByRole('textbox', {name: 'City:'}).fill(city);
        await this.page.getByRole('textbox', {name: 'Card:'}).fill(card);
        await this.page.getByRole('textbox', {name: 'Month:'}).fill(month);
        await this.page.getByRole('textbox', {name: 'Year:'}).fill(year);
    }

    async confirmOrder() {
        await this.page.getByRole('button', { name: 'Purchase' }).click();
    }
    
}