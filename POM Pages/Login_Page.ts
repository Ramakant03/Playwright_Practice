import{Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;  

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'user-name' }).or (page.getByPlaceholder('Username'));
        this.password = page.getByRole('textbox', { name: 'password' }).or (page.getByPlaceholder('Password'));;
        this.loginButton = page.getByRole('button', { name: 'login-button' }).or(page.getByText('Login'));
    }

    async goto(){
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    };
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    };




}