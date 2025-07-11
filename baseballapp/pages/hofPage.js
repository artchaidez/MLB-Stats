export class HofPage {
  constructor(page) {
    this.page = page;
    this.electeesComponent = page
      .locator('//div[contains(@class,"electees")]')
      .first();
    this.bbwaaResultsPopup = page.locator(
      '//*[contains(@class,"bbwaa-results-popup")]'
    );
    this.siteResultsPopup = page.locator(
      '//*[contains(@class,"site-results-popup")]'
    );
    this.bbwaaResultsButton = page.getByRole("button", { name: "Show 2025 BBWAA Results" });
    this.siteResultsButton = page.getByRole("button", { name: "Show Site Results" });
    this.closeButton = page.getByRole("button", { name: "Close" });
    this.checkbox = page;
    this.submitVotesButton =  page.getByRole("button", { name: "Submit Votes" });
    this.votesPopup =  page.locator('//*[contains(@class,"votes-popup")]');
    this.submittedPlayerItem = page;
  }

  async clickBbwaaResultsButton() {
    await this.bbwaaResultsButton.click();
  }

  async clickSiteResultsButton() {
    await this.siteResultsButton.click();
  }

  async clickCloseButton() {
    await this.closeButton.click();
  }

  async clickOnElecteeCheckBox(name) {
    await this.checkbox.getByRole("checkbox", { name: name }).click();
  }

  async clickSubmitVotesButton() {
    await this.submitVotesButton.click();
  }

  returnPlayerItem(name) {
    return this.submittedPlayerItem.locator(`//li[contains(text(), "${name}")]`);
  }
}
