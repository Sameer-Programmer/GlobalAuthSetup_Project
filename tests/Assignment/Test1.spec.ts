import { test, expect } from "@playwright/test";

test("assignmentMyntra", async ({ page }) => {

    await page.goto("https://www.myntra.com/");
    const profileIcon = page.locator('.desktop-userIconsContainer').first()
    await profileIcon.hover();
    const SignupTitle = page.locator('.desktop-linkButton').first()
    await SignupTitle.hover();
    await SignupTitle.click();
    await expect(page.getByText('Login or Signup')).toBeVisible();
    await page.getByText('MEN', { exact: true }).click()
    await page.getByPlaceholder('Search for products, brands and more').hover();
    await page.getByPlaceholder('Search for products, brands and more').fill('Raymonds')
    await page.getByPlaceholder('Search for products, brands and more').press('Enter');
    const raymondsHeader = page.locator('.breadcrumbs-list li:has-text("Raymonds")');
    await expect(raymondsHeader).toBeVisible();

})