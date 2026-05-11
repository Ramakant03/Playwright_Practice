import { test, expect, chromium, Page } from '@playwright/test';

test('Navigate to google ', async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
    await page.getByText("Gmail", { exact: true }).click();
    await page.waitForTimeout(5000);

});