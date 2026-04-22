import { test, expect, Locator } from "@playwright/test";

test("Frame", async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const framesCount = page.frames().length
    const framesInPage =page.frames()

    framesInPage.forEach((frame,i) =>{
        console.log(frame.url()," ",i)
    })



    console.log("Number of frames in the Page", framesCount)
    const variableFrame1 = page.frameLocator('frame[src="frame_1.html"]');
    const text1 = variableFrame1.locator('b:has-text("Frame Test Page")')
    await expect(text1).toBeVisible()
    const textField = variableFrame1.locator('input[type="text"][name="mytext1"]');
    await textField.fill("Sameer");
    await page.waitForTimeout(5000)

})