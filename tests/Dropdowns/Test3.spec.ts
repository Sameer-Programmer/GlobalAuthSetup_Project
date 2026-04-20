import { test, expect } from "@playwright/test";

test("MultiSelection", async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#colors').selectOption(['Red','Blue','Green','Yellow'])
    await page.waitForTimeout(10*1000)
})