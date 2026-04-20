import { test, expect } from "@playwright/test";

test("MultiSelectionCustomDropdown", async({ page }) => {
    await page.goto("https://vinothqaacademy.com/drop-down/");
     await page.getByRole('combobox').nth(2).click();
     page.keyboard.down('Control');
     const options = ['Java','Python','Ruby'];
     for(const option of options){
       await page.getByRole('option',{ name:`${option}`,exact:true}).click()
       await expect(page.locator(`[title="${option}"]`)).toBeVisible()
     }
     page.keyboard.up('Control');
     await page.waitForTimeout(10*1000)

     


  
})