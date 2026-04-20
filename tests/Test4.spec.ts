import{test,expect,Locator} from "@playwright/test";

/* 
<select class="form-control" id="country">
      <option value="usa">
        United States
      </option>
      <option value="canada">
        Canada
      </option>
      <option value="uk">
        United Kingdom
      </option>
      <option value="germany">
        Germany
      </option>
      <option value="france">
        France
      </option>
      <option value="australia">
        Australia
      </option>
      <option value="japan">
        Japan
      </option>
      <option value="china">
        China
      </option>
      <option value="brazil">
        Brazil
      </option>
      <option value="india">
        India
      </option>
    </select>
*/

test("TestCase4", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const country:Locator = page.locator('#country')
    //await country.click();
    await country.selectOption({
        value:"canada"})
    await page.waitForTimeout(10000)

})

// npx playwright test tests/Test4.spec.ts --headed