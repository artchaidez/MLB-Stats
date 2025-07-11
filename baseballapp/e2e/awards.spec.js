import { test, expect } from '@playwright/test';
import { AwardsPage } from '../pages/awardsPage';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('Find all three winner headers', async ({page}) => {
    const awards = new AwardsPage(page);

    await expect(awards.returnHeader("MVP Award Winners")).toBeVisible();

    await expect(awards.returnHeader("Cy Young Award Winners")).toBeVisible();

    await expect(awards.returnHeader("Rookie of the Year Award Winners")).toBeVisible();
});

test('Click on first dropdown and confirm table exists', async ({page}) => {
    const awards = new AwardsPage(page);

    await awards.dropdown.first().click();

    await expect(awards.awardTable).toBeVisible();
    
});

test('Confirm dropdown can be closed', async ({page}) => {
    const awards = new AwardsPage(page);

    await awards.clickFirstDropDown();

    await expect(awards.awardTable).toBeVisible();

    await expect(awards.awardTable).toHaveCount(1);

    await awards.clickFirstDropDown();

    await expect(awards.awardTable).toHaveCount(0);
    
});

test('Confirm Ohtani is first dropdown with correct data', async ({page}) => {
    const awards = new AwardsPage(page);

    await expect(awards.returnDropdownTitle("Shohei Ohtani - Los Angeles Dodgers")).toBeVisible();

    await awards.clickFirstDropDown();

    await expect(awards.returnTableData("9.1")).toBeVisible();
});