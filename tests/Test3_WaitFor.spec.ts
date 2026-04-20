import { test, expect, chromium,Locator} from "@playwright/test"
import { waitForDebugger } from "inspector";

test("TestCase 3", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');

    const titleLocator = page.getByText('Automation Testing Practice').waitFor({state:'visible'})
    const Url2 = "https://testautomationpractice.blogspot.com/2018/09/automation-form.html"
    await page.waitForURL('Url2')
    page.waitForTimeout(3000)

})

//npx playwright test tests/Test3.spec.ts --headed