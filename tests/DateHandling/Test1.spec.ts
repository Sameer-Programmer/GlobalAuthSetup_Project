import { test, expect } from "@playwright/test"

test("CalendarHandling", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const targetDate = "2";
    const targetMonth = "September";//September
    const targetYear = "2026";
    const datePicker = await page.locator('#datepicker').first().click();
    const futureButton =  page.locator('.ui-icon.ui-icon-circle-triangle-e')

    while (true) {
        const currentMonthText = await page.locator('.ui-datepicker-month').innerText();
        const currentYearText = await page.locator('.ui-datepicker-year').innerText();
        if (targetMonth === currentMonthText && targetYear === currentYearText) {
            break;
        }
        await futureButton.click()
    }

    const cells = page.locator('.ui-datepicker-calendar>tbody>tr>td');
    const targetDateCell = cells.filter({ hasText:`${targetDate}`}).first()
    await targetDateCell.click()
    await page.waitForTimeout(20000)
})

