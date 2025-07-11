export class LeadersPage {

    constructor(page) {
        this.page = page;
        this.tableHeader = page;
        this.tableData = page;
        this.pitchingTab = page.getByRole('button', { name: 'Pitching'});
        this.tableRows = page.locator('//tbody[contains(@class,"leader-tbody")]').locator('//tr');
    }

    returnSearchedTableHeader(title) {
        return this.tableHeader.locator(`//div[contains(text(),"${title}")]`);
    }

    returnSearchedTableData(data) {
        return this.tableData.locator(`//td[contains(text(),"${data}")]`)
    }

    async clickOnPitchingTab() {
        await this.pitchingTab.click();
    }

    async clickOnTableHeader(title){
        await this.tableHeader.locator(`//div[contains(text(),"${title}")]`).click();
    }
}