import { test, expect } from "@playwright/test";

test("BootStrapCalendar", async ({ page }) => {
    await page.goto('https://www.booking.com/');
    await page.locator('[aria-label="Dismiss sign-in info."]').click()
    await page.getByText('Check-in date').first().click()

    const targetMonth = "September";
    const targetYear = "2026";
    const targetDate = "2"

    //#bui-calendar-month-2026-3



    while (true) {
        const currentMonthText = await page.locator('.e7addce19e.af236b7586').first().innerText();
        const currentYearText = await page.locator('.e7addce19e.af236b7586').first().innerText();
        console.log(currentMonthText, "   ", currentYearText);

        if(currentMonthText.includes(targetMonth) && currentYearText.includes(targetYear)){
            break;
        }

        const NextButton = page.locator('[aria-label="Next month"]');
        await NextButton.click()

    }
    const table = page.locator('.b8fcb0c66a').first()
    const cells = table.locator('tbody tr td');
    const targetDateCell = cells.filter({hasText:targetDate}).first();
    await targetDateCell.click()

    


    const targetMonth2 = "November"; 
    const targetYear2 = "2026";
    const targetDate2 = "2"


    while (true) {
        const currentMonthText2 = await page.locator('.e7addce19e.af236b7586').last().innerText();
        const currentYearText2 = await page.locator('.e7addce19e.af236b7586').last().innerText();
        console.log(currentMonthText2, "   ", currentYearText2);

        if(currentMonthText2.includes(targetMonth2) && currentYearText2.includes(targetYear2)){
            break;
        }

        const NextButton = page.locator('[aria-label="Next month"]');
        await NextButton.click()

    }

     const table2 = page.locator('.b8fcb0c66a').last()
    const cells2 = table2.locator('tbody tr td');
    const targetDateCell2 = cells2.filter({hasText:targetDate2}).first();
    await targetDateCell2.click()
    await page.getByText('Search', { exact: true }).first().click()
      await page.waitForTimeout(15000)

})

/* 
April 2026     April 2026
May 2026     May 2026
June 2026     June 2026
July 2026     July 2026
August 2026     August 2026
September 2026     September 2026
October 2026     October 2026
November 2026     November 2026
  2 passed (20.4s)

To open last HTML report run:

  npx playwright show-report

PS D:\GlobalAuthSetup_Project> 
*/