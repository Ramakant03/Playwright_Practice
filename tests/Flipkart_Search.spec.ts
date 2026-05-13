import { test, expect, Locator } from '@playwright/test';

test.describe('Verify flipkart test cases', () => {

    const flipkart_url = "https://www.flipkart.com/";

    test.beforeEach(async ({ page }) => {
        await page.goto(flipkart_url);

    })

    test("verify search for lowest price macmini", async ({ page }) => {

        await page.goto(flipkart_url + 'search');
        await page.getByRole('textbox', { name: "Search for Products, Brands and More" }).click();
        await page.getByPlaceholder("Search for Products, Brands and More").fill('macmini');
        const svgElement = page.locator('svg');
        await svgElement.first().click();
        await page.waitForTimeout(5000);
        await page.getByText('Price -- Low to High').click();
        await page.waitForTimeout(5000);
        let macmini: Locator = page.locator("//div[@class = 'nZIRY7' ]//a[@class='pIpigb']").first();
        let price: Locator = page.locator("//div[@class='hZ3P6w']").first();
        console.log("Product Name: " + await macmini.innerText());
        console.log("LowestProduct Price: " + await price.innerText());

    });


});


