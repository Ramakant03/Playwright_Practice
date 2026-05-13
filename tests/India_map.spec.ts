import { test, expect, Locator } from '@playwright/test';

test.describe('Verify india map test cases', () => {
    const india_map_url = "https://simplemaps.com/svg/country/in";

    test.beforeEach(async ({ page }) => {
        await page.goto(india_map_url);

    });
    test('Verify all states', async ({ page }) => {
        let stateName: Locator = page.locator('svg');
        let stateNames = await stateName.all();

        for (const state of stateNames) {
            console.log(`state name ${await state.textContent()}`);

        }


    });
    test('Verify clicked on UP state', async ({ page }) => {
        const upState: Locator = page.locator("//*[name()='path' and contains(@class,'INUP')]");
        await upState.click();
        await page.waitForTimeout(5000);
        const statename = page.getByText("Uttar Pradesh").first();
        console.log("State Name is:" + statename);
        //expect(upState).toHaveText("Uttar Pradesh");
    });

});