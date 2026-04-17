import { test, expect } from "@playwright/test";

//File Path -> tests/auth.setup.ts


test("Title", async ({ context }) => {
  const page = await context.newPage();
  const url = "https://tutorialsninja.com/demo/";
  const myAccount = page.locator('a[title="My Account"]'); //
  const login = page.getByText("Login");
  const inputUserEmail = page.getByPlaceholder("E-Mail Address");
  const passwordInput = page.getByPlaceholder("Password");
  const submitButton = page.locator('input[type = "submit"]');

  await page.goto(url);
  await myAccount.click();
  await login.click();
  await inputUserEmail.fill("Erika_Muller@hotmail.com");
  await passwordInput.fill("akELz_DTAGDU5ay");
  await submitButton.click();
  await context.storageState({ path: "tests/storage.json" });
});


