import { test, expect } from "@playwright/test"

test("CalendarHandling", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const targetDate = "2";
    const targetMonth = "Sep";//September
    const targetYear = "2026";
   // const datePicker =
     await page.locator('#txtDate').first().click();
   // const futureButton =  page.locator('.ui-icon.ui-icon-circle-triangle-e')

    const monthDropdown = page.locator('.ui-datepicker-month')
    await monthDropdown.selectOption({label:targetMonth})

    const yearDropdown = page.locator('.ui-datepicker-year')
    await yearDropdown.selectOption({label:targetYear})

    const cells = page.locator('.ui-datepicker-calendar>tbody>tr>td');
    const targetDateCell = cells.filter({ hasText:`${targetDate}`}).first()

    await targetDateCell.click()
    await page.waitForTimeout(20000)
})

