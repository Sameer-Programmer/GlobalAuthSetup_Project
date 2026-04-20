import { test, expect, Locator } from "@playwright/test";

test("TestSortingCheck ", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const options: Locator[] = await page.locator('[id="animals"] option').all();
    const optionsArray = []

    for (let option of options) {
        const ch = await option.innerText();
        optionsArray.push(ch)
    }

    console.log(optionsArray)
    const sortedArray = [...optionsArray].sort()
    expect(optionsArray).toEqual(sortedArray)




})
/* 
[
  'Cat',      'Cheetah',
  'Deer',     'Dog',
  'Elephant', 'Fox',
  'Giraffe',  'Lion',
  'Rabbit',   'Zebra'
]
  2 passed (39.1s)

To open last HTML report run:

  npx playwright show-report

PS D:\GlobalAuthSetup_Project> 
*/