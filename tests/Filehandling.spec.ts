import { test, expect, chromium, Locator } from "@playwright/test";
import { Utils } from '../Utils/helper';
import { DateTime } from 'luxon';

//Utils/helper.ts


test("FileUpload ", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
    const FileUploadLink: Locator = page.getByRole('link', {
        name: 'File Upload'
    })
    await FileUploadLink.click();
    await page.locator('#file-upload').setInputFiles('UploadFiles/file.txt')
    await page.waitForTimeout(6000)
})


test("FileDownload", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
    //File Download
    const DownloadLink: Locator = page.locator('//a[text()="File Download"]')
    await DownloadLink.click()
    const [downLoad] = await Promise.all([
        page.waitForEvent('download'),
        await page.getByRole('link', { name: 'some-file.txt' }).click()
    ])

    const date = DateTime.now().toLocaleString(DateTime.DATE_MED);

    //const downloadedFilename = `Downloads/${DateTime.now().toFormat('dd-MM-yyyy_HH-mm-ss')}.txt`;
    const downloadedFilename = `Downloads/${date}.txt`;

    await downLoad.saveAs(downloadedFilename)

    // read the downloaded text file 
    const content = await Utils.readTextFile(downloadedFilename);
    console.log(content);

    //const time = DateTime.now().toFormat('')
})


