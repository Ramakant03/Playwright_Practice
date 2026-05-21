import { test, expect } from '@playwright/test'

test('form fill', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.waitForTimeout(25000);
    //await page.locator('id=name').click();
    await page.locator('id=name').fill('Amrut');
    await page.getByPlaceholder('Enter EMail').click();
    await page.locator('id=email').fill('amrut@amrut.com');


    //await page.getByPlaceholder('Enter Phone').click();
    await page.getByPlaceholder('Enter Phone').fill('125636666');

    //await page.locator('id=textarea').click();
    await page.locator('#textarea').fill('1555 ahhhsahv pin 1441jhj');

    //await page.getByRole('radio', { name:'Male', exact: true}).check();


    await page.locator('#female').check();


    let name1: string[] = ['sunday', 'Monday', 'Tuesday', 'thursday', 'friday', 'saturday'];

    await page.getByRole('checkbox', { name: name1[0] }).check();
    await page.getByRole('checkbox', { name: name1[1] }).check();
    await page.getByRole('checkbox', { name: name1[2] }).check();

    await page.locator('id=country').selectOption('India');
    //await page.pause();
    await page.locator('id=country').selectOption({ value: 'canada' });


    //await page.getByRole('list',{name:'red'}).check();
    await page.locator('id=colors').selectOption('red')
    //await page.pause();

    await page.locator('id=colors').selectOption('blue')
    //mouse over
    await page.getByRole('button', { name: 'Point Me' }).hover();
    //await page.getByText('Laptops',{exact:true}).click();
    await page.locator("//a[text()='Mobiles']").click();
    await page.pause();

}
);