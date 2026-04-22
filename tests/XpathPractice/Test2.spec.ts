import { test, expect } from "@playwright/test";


test("expo", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const HeadersText = await page.locator('table[id="taskTable"]>thead>tr>th').allInnerTexts();
    const indexOfCPU = HeadersText.indexOf('CPU (%)');
    console.log(indexOfCPU)
    const rows =  page.locator('table[id="taskTable"] tbody tr')
    const chromeRow = rows.filter({hasText:"Chrome"});
    console.log(chromeRow);
    const targetCellText = (await chromeRow.locator('td').nth(indexOfCPU).innerText()).trim();
    console.log(targetCellText, "targetCellText");

   const expectedText= (await page.locator('//div[@id="displayValues"]/child::p[1]').innerText()).trim();
    console.log(expectedText),"expectedText";

    let flag = false
    if(targetCellText.includes(expectedText)){
        flag = true
    }

    await expect(flag).toBeTruthy()







})
/* 
<div class="display-values" id="displayValues">
            <p>CPU load of Chrome process: <strong class="chrome-cpu">3.6%</strong></p>
            <p>Memory Size of Firefox process: <strong class="firefox-memory">33.9 MB</strong></p>
            <p>Network speed of Chrome process: <strong class="chrome-network">8.9 Mbps</strong></p>
            <p>Disk space of Firefox process: <strong class="firefox-disk">0.98 MB/s</strong></p>
        </div>
*/
//div[@id="displayValues"]/child::p[1]