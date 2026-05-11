import { test, expect } from '@playwright/test';

test("Verify Invalid Email validation", async ({ page }) => {
    const login_url = "https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage";
    await page.goto(login_url);

    await page.getByRole('textbox', { name: 'email' }).pressSequentially("test@gmail.com", { delay: 300 });

    await expect(page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")).toBeVisible();

});