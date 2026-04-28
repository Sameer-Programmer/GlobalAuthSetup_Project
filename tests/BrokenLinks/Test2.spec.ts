import { test, expect } from "@playwright/test"
import { triggerAsyncId } from "async_hooks";


test("BrokenLinks2", async ({ page, request }) => {
    test.setTimeout(120000)
    const url = "https://testautomationpractice.blogspot.com/"
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const anchortags = page.locator('a');
    const count = await anchortags.count();

    for (let i = 0; i < count; i++) {
        const link = await anchortags.nth(i).getAttribute("href")

        if (link && link.startsWith("http")) {
            try {
                const response = await request.get(link ,{timeout:5000})
                const statusCode = response.status()

                if (statusCode >= 400) {
                    console.log(i, "  ", link, "  brokenLink" + statusCode)
                } else {
                    console.log(i, "  ", link, "  valid" + statusCode)
                }
            } catch (error) {
                console.log(i, "  ", link, "  foundError")
            }


        }



    }

})