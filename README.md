# Playwright Practice

This repository contains automated test scripts developed using Playwright and TypeScript.

## Project Structure

- `tests/`: Contains test specification files.
  - `Flipkart_Search.ts`: Test cases for Flipkart automation, including searching for products and filtering by price.
  - `hover_&_right_click.spec.ts`: Tests demonstrating hover and right-click interactions.
- `playwright.config.ts`: Configuration file for Playwright.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npx playwright test
   ```

## Recent Fixes

### TypeScript Error: "Cannot find name 'Locator'"
Fixed an issue in `tests/Flipkart_Search.ts` where the `Locator` type was used without being imported from `@playwright/test`.
