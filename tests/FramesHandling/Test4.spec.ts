import {test,expect} from "@playwright/test";

test("TestCase4FramesConcept",   async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/");
   const variableFrame3 = page.frame({url:/docs\.google\.com\/forms/})
   if(variableFrame3){
   const firstRadioButton = variableFrame3.locator('.vd3tt').first()
   await firstRadioButton.click()
   }else {
    console.log("FrameNotFound")
   }
})

/* 

Breakdown:
docs = exact text
\. = dot=> RightSideDotAfter slash
google = text
\/ = slash
*/