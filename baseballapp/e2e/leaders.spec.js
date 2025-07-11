import { test, expect } from '@playwright/test';
import { LeadersPage } from '../pages/leadersPage';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/leaders');
});

test('Confirm batting table is shown on load', async ({page}) => {
    const leaders = new LeadersPage(page);

    await expect(leaders.returnSearchedTableHeader("wRC+")).toBeVisible();

    await expect(leaders.returnSearchedTableData("218")).toBeVisible();

});

test('Click on pitching tab and confirm pitching tab shows', async ({page}) => {
    const leaders = new LeadersPage(page);

    await leaders.clickOnPitchingTab();

    await expect(leaders.returnSearchedTableHeader("ERA")).toBeVisible();

    await expect(leaders.returnSearchedTableData("2.38")).toBeVisible();
});

test('Click on BsR to sort in descending order and confirm correct order of players', async ({page}) => {
    const leaders = new LeadersPage(page);

    const correctTableOrder = ["Shohei Ohtani", "Bobby Witt Jr", "Gunner Henderson", "Aaron Judge", "Juan Soto"]

    await expect(leaders.tableRows).toHaveCount(5);

    await leaders.clickOnTableHeader("BsR");

    for (let i = 0; i < correctTableOrder.length; i++) {
        const item = leaders.tableRows.nth(i);
        const text = item.getByText(correctTableOrder[i]);
        await expect(text).toBeVisible();
    }
})