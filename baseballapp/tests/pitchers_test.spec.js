import { test, expect } from "@playwright/test";

test("Test GET /pitchers Request", async ({ request }) => {
  const correctIDs = [
    "Chris-Sale",
    "Paul-Skenes",
    "Tarik-Skubal",
    "Luis-Gil",
    "Dylan-Cease",
    "Cole-Ragans",
    "Zack-Wheeler",
  ];

  const response = await request.get("http://localhost:8081/pitchers");
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  for (let i = 0; i < responseBody.length; i++) {
    expect(responseBody[i]).toHaveProperty("id", correctIDs[i]);
  }
});

test("Test GET /pitchers/{id} Request", async ({ request }) => {
  const response = await request.get(
    "http://localhost:8081/pitchers/Chris-Sale"
  );
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("id", "Chris-Sale");
  expect(responseBody).toHaveProperty("hitter", false);
  expect(responseBody).toHaveProperty(
    "img",
    "https://images.fangraphs.com/nobg_small_22868979.png"
  );
  expect(responseBody).toHaveProperty("era", 2.38);
  expect(responseBody).toHaveProperty("fWAR", 6.4);
});

test("Test POST /pitchers Request", async ({ request }) => {
  const response = await request.post("http://localhost:8081/pitchers", {
    data: {
      id: "Chris-Sale2",
      name: "Chris Sale",
      city: "Atlanta",
      team: "Braves",
      teamAcronym: "ATL",
      hitter: false,
      img: "https://images.fangraphs.com/nobg_small_22868979.png",
      games: 29,
      qualityStarts: 18,
      wins: 18,
      loses: 3,
      inningsPitched: 177.2,
      strikeouts: 225,
      kPercentage: 32.1,
      bbPercentage: 5.6,
      groundBallRate: 44.8,
      era: 2.38,
      xEra: 2.79,
      fip: 2.09,
      xFip: 2.64,
      fWAR: 6.4,
    },
  });

  expect(response.status()).toBe(200);
});

test("Test GET /topFivePitchers Request", async ({ request }) => {
  const correctIDs = [
    "Chris-Sale",
    "Tarik-Skubal",
    "Zack-Wheeler",
    "Cole-Ragans",
    "Dylan-Cease",
  ];

  const response = await request.get("http://localhost:8081/topFivePitchers");
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  for (let i = 0; i < responseBody.length; i++) {
    expect(responseBody[i]).toHaveProperty("id", correctIDs[i]);
  }
});
