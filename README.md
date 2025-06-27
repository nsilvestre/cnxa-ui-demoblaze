# Demoblaze Playwright Automation

This project automates three main user flows on the Demoblaze website using Playwright:

## Automated Flows

### 1. Sign Up
- Navigates to the Demoblaze homepage.
- Opens the Sign Up modal.
- Enters a new username and password.
- Submits the form and verifies successful registration.

### 2. Add Element to Cart
- Navigates to the Demoblaze homepage.
- Selects a product from the list.
- Adds the product to the shopping cart.
- Verifies that the product appears in the cart.

### 3. Complete Purchase
- Navigates to the cart page with items added.
- Clicks on 'Place Order'.
- Fills in purchase details (name, country, city, card, month, year).
- Submits the order and verifies the confirmation message.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Demoblaze
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

### Running the Tests
To run all tests in Chromium and headed mode:
```sh
npx playwright test --project=chromium --headed
```

To view the test report after running tests:
```sh
npx playwright show-report
```

## Project Structure
- `pages/` - Page Object Model files for each page/flow, including the Page Object Manager.
- `tests/` - Test specifications
- `test_data/` - Test data (e.g., products)
- `playwright.config.ts` - Playwright configuration

---
For more details, refer to the code and comments in each file.
