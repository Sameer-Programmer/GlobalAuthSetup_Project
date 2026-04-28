import { test, expect } from "@playwright/test"


test("BrokenLinks", async ({ page, request }) => {

    test.setTimeout(120000);
    await page.goto("https://testautomationpractice.blogspot.com/",
        {waitUntil:"domcontentloaded"});
    
    const anchorTags = page.locator('//a');
    const count = await anchorTags.count();
    console.log(count,"   ","Count")

    for (let i = 0; i < count; i++) {
        const link = await anchorTags.nth(i).getAttribute("href");
        if (link && link.startsWith("http")) {
            try {
                const response = await request.get(link, {
                timeout: 5000});
                const statusCode = response.status()
            if (statusCode >= 400) {
                console.log(i,"    ",link+"             brokenlink"+statusCode)
            }  
            } catch (error) {
                 console.log(i,"    ",link+"             "+"Notworking")
            }
          
        }


    }



})

//npx playwright test tests/BrokenLinks/Test1.ts --headed