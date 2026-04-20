import { test, expect, Locator } from "@playwright/test";

test("simpleDropdown", async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/drop-down/');
    await page.getByRole('combobox',{ name:"Choose an Account"}).click();
    const value  = "8400143 Bal - $10,453.84"
    await page.getByRole('option',{ name:`${value}`}).click();

 

})

