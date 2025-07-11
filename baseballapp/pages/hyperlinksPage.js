export class HyperLinksPage {
    constructor(page) {
        this.page = page
    }

    //a[contains(text(),'Fangraphs')]
    async clickOnHyperLink(text) {
        await this.page.locator(`//a[contains(text(),'${text}')]`).click();
    }
}