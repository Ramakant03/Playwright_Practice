import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM Pages/Login_Page';

test.describe('Login Test Case suite', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Login with valid credentials', async ({ page }) => {
        await loginPage.login('standard_user', 'tta_secret');
        await expect(page).toHaveTitle('TTACart - Products');
    });

    test('Login with invalid credentials', async () => {
        await loginPage.login('standard_1user', 'tta_1secret');
        const errorMessage = await loginPage.page.getByText('Epic sadface: Username and password do not match any user in this service').textContent();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });

});