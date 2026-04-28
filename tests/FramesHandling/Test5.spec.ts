import { test, expect } from "@playwright/test";

test("TestCase5Frames", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    let frames = page.frames()
    let framesCount = frames.length
    console.log(framesCount);
    frames.forEach((frame, i) => {
        console.log(frame.url(), " ", i)
    })

    const varibleFrame6 = frames[6]
    await varibleFrame6.locator('.vd3tt').first().click()

    const varibleFrame5 = frames[5]
    // <input type="text" size="25">
    await varibleFrame5.locator('[name="mytext5"]').first().fill("Frame5")
    await page.waitForTimeout(16000)
})

/* 
7
https://ui.vision/demo/webtest/frames/   0                                                                                                                              
https://ui.vision/demo/webtest/frames/frame_1.html   1                                                                                                                  
https://ui.vision/demo/webtest/frames/frame_2.html   2                                                                                                                  
https://ui.vision/demo/webtest/frames/frame_3.html   3                                                                                                                  
https://ui.vision/demo/webtest/frames/frame_4.html   4                                                                                                                  
https://ui.vision/demo/webtest/frames/frame_5.html   5                                                                                                                  
https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true   6          
*/


https://example.com/frames