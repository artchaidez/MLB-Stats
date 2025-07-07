import { test, expect } from "@playwright/test";
import { HofPage } from "../pages/HofPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/hof");
});

test("Confirm 2025 Electees Component displaying", async ({ page }) => {
  const Hof = new HofPage(page);

  await expect(Hof.electeesComponent).toBeVisible();
});

test("Confirm BbwaaButton is displaying, shows popup on click, and can be closed", async ({
  page,
}) => {
  const Hof = new HofPage(page);

  await Hof.clickBbwaaResultsButton();

  await expect(Hof.bbwaaResultsPopup).toHaveCount(1);

  await Hof.clickCloseButton();

  await expect(Hof.bbwaaResultsPopup).toHaveCount(0);
});

test("Confirm SiteResultsButton is displaying, shows popup on click, and can be closed", async ({
  page,
}) => {
  const Hof = new HofPage(page);

  await Hof.clickSiteResultsButton();

  await expect(Hof.siteResultsPopup).toHaveCount(1);

  await Hof.clickCloseButton();

  await expect(Hof.siteResultsPopup).toHaveCount(0);
});

test("Confirm HofCandidate component label can be clicked and vote can be submitted with VotesPopup component, then closed", async ({
  page,
}) => {
  const Hof = new HofPage(page);

  const suzuki = "Ichiro Suzuki";

  await Hof.clickOnElecteeCheckBox(suzuki);

  await Hof.clickSubmitVotesButton();

  await expect(Hof.votesPopup).toBeVisible();

  await expect(Hof.returnPlayerItem(suzuki)).toBeVisible();

  await Hof.clickCloseButton();

  await expect(Hof.votesPopup).toHaveCount(0);
});
