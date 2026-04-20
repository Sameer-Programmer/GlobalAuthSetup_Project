import { test, expect, chromium, Locator } from "@playwright/test"


test('Testcase 4', async () => {

    const url = "https://the-internet.herokuapp.com/"

    const browser = await chromium.launch();
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    }
    );
    const page = await context.newPage();
    await page.goto(url);
    const basicAuthLink: Locator = page.getByRole('link', {
        name: 'Basic Auth'
    })

    await basicAuthLink.click();
    await page.waitForLoadState()
    const congratulationsMessageLocator: Locator = page.getByText('Congratulations! You must have the proper credentials');
    await congratulationsMessageLocator.waitFor({ state: "visible" })
    await expect(congratulationsMessageLocator).toBeVisible()


})

//npx playwright test tests/Test3.spec.ts --headed