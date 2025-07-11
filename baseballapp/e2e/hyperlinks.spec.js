import { test, expect } from '@playwright/test';
import { HyperLinksPage } from '../pages/hyperlinksPage';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('Click on Fangraphs link and confirm page is opened', async ({page}) => {
    const hyperlinks = new HyperLinksPage(page);

    hyperlinks.clickOnHyperLink("Fangraphs");

    await expect(page).toHaveURL("https://www.fangraphs.com/");
})

test('Click on Baseball-Savant link and confirm page is opened', async ({page}) => {
    const hyperlinks = new HyperLinksPage(page);

    hyperlinks.clickOnHyperLink("Baseball-Savant");

    await expect(page).toHaveURL("https://baseballsavant.mlb.com/");
})