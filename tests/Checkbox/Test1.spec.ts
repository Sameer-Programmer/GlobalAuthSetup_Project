import { test, expect } from "@playwright/test";

test("TestCheckBox ", async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator(' [type="checkbox"][value="sunday"]').check()
    const options = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    for(const option of options ){
        await page.locator(`[type="checkbox"][value="${option}"]`).check()
        expect(page.locator(`[type="checkbox"][value="${option}"]`)).toBeChecked()
    }
     await page.waitForTimeout(10*1000)
   
})
