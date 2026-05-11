import { test, expect, Locator } from '@playwright/test';

test("Verify invalid login credentials", async ({ page }) => {
    const login_url = "https://app.vwo.com/#/login";
    await page.goto(login_url);
    //  const tittle = page.getByTitle("login_url");
    await page.getByRole('textbox', { name: 'email' }).fill('test@gmail.com');
    await page.getByRole('textbox', { name: 'password' }).fill('test@123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(5000);
    let result = await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
    console.log(result);
});
