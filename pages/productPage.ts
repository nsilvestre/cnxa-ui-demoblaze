import { Page, expect } from '@playwright/test';

export class ProductPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        // 2. Scroll to make sure it's visible
        await this.page.getByText('Add to cart').scrollIntoViewIfNeeded();

        // 3. Click the button
        await this.page.getByText('Add to cart').click({ force: true})
    }

}