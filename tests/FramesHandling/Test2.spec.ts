import { test, expect, Locator } from "@playwright/test";

test("Frame3", async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
 
    const variableFrame3 = page.frameLocator('frame[src="frame_3.html"]');
    //<input type="text" name="mytext3" size="25">
    const text3 = variableFrame3.locator('input[name="mytext3"]');
    await text3.fill("SameerText3")

    const innerFrame = variableFrame3.frameLocator('iframe');

   await innerFrame.locator('.vd3tt').nth(0).click()

   await page.waitForTimeout(15000)

})