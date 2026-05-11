import { test, expect } from '@playwright/test';

test("verify hover functionality", async ({ page }) => {
    const url = "https://app.thetestingacademy.com/playwright/widgets/hover-menu";

    await page.goto(url);
    await page.getByTestId('nav-add-ons').hover();
    await page.waitForTimeout(1000);
    await page.getByTestId('test-id-Wifi').click();
    await page.waitForTimeout(1000);

    let wifi_result = await page.getByTestId('hover-output').innerText();
    console.log(wifi_result);
    expect(wifi_result).toContain('at');
})

test('verify right click functionality', async ({ page }) => {

    const right_click_url = 'https://app.thetestingacademy.com/playwright/widgets/context-menu';
    await page.goto(right_click_url);
    await page.getByTestId('ctx-target').click({ button: 'right' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Copy' }).first().click();
});