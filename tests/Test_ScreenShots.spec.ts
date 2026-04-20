import { test, expect } from "@playwright/test";

test("Search for Mobile", async ({ page }) => {
  await page.goto("https://tutorialsninja.com/demo/"); // ✅ MISSING STEP
  const searchBox = page.getByPlaceholder("Search");
  const iphoneElement = page.locator('a:has-text("iPhone")');
  const timestamp = Date.now();
  await searchBox.waitFor();
  await searchBox.fill("iPhone");
  await searchBox.press("Enter");
  await expect(iphoneElement).toBeVisible();

  await page.waitForTimeout(5000)

  const innerHtmlPhone = await iphoneElement.innerHTML();
  console.log(innerHtmlPhone, "               innerHtmlPhone");

  const textContentIphone = await iphoneElement.textContent();
  console.log(textContentIphone, "             textContentIphone");

  const innerTextIphone = await iphoneElement.innerText();
  console.log(innerTextIphone, "               innerTextIphone");

  await page.screenshot({ path: "ScreenShots/MobilePage.jpg", fullPage: true }); //fullPage

  await iphoneElement.screenshot({
    path: `ScreenShots/${timestamp}MobilePage2.jpg`,
  });
});


// npx playwright test tests/Test2.spec.ts --headed