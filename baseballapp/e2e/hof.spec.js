import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/hof");
});

test("Confirm 2025 Electees Component displaying", async ({ page }) => {
  await expect(
    page.locator('//div[contains(@class,"electees")]').first()
  ).toBeVisible();
});

test("Confirm BbwaaButton is displaying, shows popup on click, and can be closed", async ({
  page,
}) => {
  let bbwaaResultsPopup = page.locator(
    '//*[contains(@class,"bbwaa-results-popup")]'
  );

  await page.getByRole("button", { name: "Show 2025 BBWAA Results" }).click();

  await expect(bbwaaResultsPopup).toHaveCount(1);

  await page.getByRole("button", { name: "Close" }).click();

  bbwaaResultsPopup = page.locator(
    '//*[contains(@class,"bbwaa-results-popup")]'
  );

  await expect(bbwaaResultsPopup).toHaveCount(0);
});

test("Confirm SiteResultsButton is displaying, shows popup on click, and can be closed", async ({
  page,
}) => {
  let SiteResultsPopup = page.locator(
    '//*[contains(@class,"site-results-popup")]'
  );

  await page.getByRole("button", { name: "Show Site Results" }).click();

  await expect(SiteResultsPopup).toHaveCount(1);

  await page.getByRole("button", { name: "Close" }).click();

  SiteResultsPopup = page.locator('//*[contains(@class,"site-results-popup")]');

  await expect(SiteResultsPopup).toHaveCount(0);
});

test("Confirm HofCandidate component label can be clicked and vote can be submitted with VotesPopup component, then closed", async ({
  page,
}) => {
  await page.getByRole("checkbox", { name: "Ichiro Suzuki" }).click();

  await page.getByRole("button", { name: "Submit Votes" }).click();

  let votesPopup = page.locator('//*[contains(@class,"votes-popup")]');

  await expect(votesPopup).toBeVisible();

  await expect(
    page.locator('//li[contains(text(),"Ichiro Suzuki")]')
  ).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  votesPopup = page.locator('//*[contains(@class,"votes-popup")]');

  await expect(votesPopup).toHaveCount(0);
});
