import { test, expect, Locator } from "@playwright/test";

test("simpleDropdown", async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/drop-down/')
    const chooseCityDropdown:Locator =  page.getByRole('combobox',{
        name :'Choose A City'
    })
    await chooseCityDropdown.click();

      const chooseOptionChennai:Locator =  page.getByRole('option',{
        name :'Chennai'
    })

    await chooseOptionChennai.click()

})

