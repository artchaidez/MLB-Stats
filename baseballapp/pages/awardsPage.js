export class AwardsPage {
    constructor(page)
    {
        this.page = page;
        this.dropdown = page.locator('//div[contains(@class, "collapse-header")]');
        this.awardTable = page.locator('//table[contains(@class,"award-table")]');
    }

    returnHeader(title) {
        return this.page.locator(`//h1[contains(text(),"${title}")]`)
    }

    async clickFirstDropDown() {
        await this.dropdown.first().click();
    }

    returnDropdownTitle(title) {
        return this.page.locator(`//span[contains(text(), "${title}")]`)
    }

    returnTableData(data) {
        return this.page.locator(`//td[contains(text(), "${data}")]`)
    }
}