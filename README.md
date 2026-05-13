# Playwright Practice

This repository contains automated test scripts developed using Playwright and TypeScript.

## Project Structure

- `tests/`: Contains test specification files.
  - `Flipkart_Search.spec.ts`: Test cases for Flipkart automation, including searching for products and filtering by price.
  - `India_map.spec.ts`: Tests for interacting with an SVG map of India.
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
Fixed an issue in `tests/Flipkart_Search.spec.ts` where the `Locator` type was used without being imported from `@playwright/test`.
