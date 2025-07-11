import { test, expect } from "@playwright/test";

test("Test GET /hitters Request", async ({ request }) => {
  const correctIDs = [
    "Aaron-Judge",
    "Bobby-Witt-Jr",
    "Shohei-Ohtani",
    "Juan-Soto",
    "Gunner-Henderson",
  ];

  const response = await request.get("http://localhost:8081/hitters");
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  for (let i = 0; i < correctIDs.length; i++) {
    expect(responseBody[i]).toHaveProperty("id", correctIDs[i]);
  }
});

test("Test GET /hitters/{id} Request", async ({ request }) => {
  const response = await request.get(
    "http://localhost:8081/hitters/Aaron-Judge"
  );
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("id", "Aaron-Judge");
  expect(responseBody).toHaveProperty("hitter", true);
  expect(responseBody).toHaveProperty(
    "img",
    "https://images.fangraphs.com/nobg_small_22879706.png"
  );
  expect(responseBody).toHaveProperty("wRC+", 218)
  expect(responseBody).toHaveProperty("fWAR", 11.2);
});

test("Test POST /hitters Request", async ({ request }) => {
  const response = await request.post("http://localhost:8081/hitters", {
    data: {
      id: "Aaron-Judge2",
      name: "Aaron Judge",
      city: "New York",
      team: "Yankees",
      teamAcronym: "NYY",
      hitter: true,
      img: "https://images.fangraphs.com/nobg_small_22879706.png",
      games: 158,
      plateApperances: 704,
      homeRuns: 58,
      rbis: 144,
      stolenBases: 10,
      bbPercentage: 18.9,
      kPercentage: 24.3,
      avg: 0.322,
      obp: 0.458,
      slg: 0.701,
      bsr: -0.4,
      def: -9.9,
      fWAR: 11.2,
      wRCPlus: 218,
    },
  });

  expect(response.status()).toBe(200);
});
