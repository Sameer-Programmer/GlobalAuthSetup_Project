import { test, expect } from "@playwright/test";

test("RadioButtonCheck ", async({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('#male').check()
await expect(page.locator('#male')).toBeChecked()
await page.waitForTimeout(10*1000)
})
