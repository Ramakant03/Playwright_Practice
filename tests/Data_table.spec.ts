import { test, Locator } from '@playwright/test'

test.describe('Data table test suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com");
    })

    test('Verify table values', async ({ page }) => {

        const row2: Locator = page.locator("//table[@name='BookTable']/tbody/tr", { hasText: 'Learn Java' });
        const author1: String = await row2.locator('td').nth(2).innerText();
        console.log(author1);

    })

    test('Fill user info form', async ({ page }) => {
        await page.getByRole('textbox', { name: 'name' }).fill('Swami Vivekananda');
        await page.getByRole('textbox', { name: 'email' }).fill('test@mail.com');
        await page.getByRole('textbox', { name: 'phone' }).fill('888888888');
        await page.pause();
    });

});