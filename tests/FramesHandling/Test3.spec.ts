import {test,expect} from "@playwright/test" 

test("TestCase3Frames", async({page})=>{
    /* 
    <iframe src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true" width="650" height="350" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    */
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const urlOfFrame = "https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"
    const variableFrame = page.frame({url:urlOfFrame});
    if(urlOfFrame.includes("https://docs.google.com/forms")){
        if(variableFrame){
    const radioButtonOfFirst =variableFrame.locator('.vd3tt').nth(0);
    await radioButtonOfFirst?.click()
        }
        else{
        console.log("FrameNotFound")
    }
    }
    await page.waitForTimeout(16000)
})