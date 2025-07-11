import { test, expect } from "@playwright/test";

test("Test GET /hof Request", async ({ request }) => {
  const response = await request.get("http://localhost:8081/hof");
  expect(response.status()).toBe(200);
});

test("Test POST /hof Request", async ({ request }) => {
  const response = await request.get("http://localhost:8081/hof", {
    data: {
      id: "Chase-Utley",
      name: "Chase Utley",
      totalVotes: 1,
    },
  });
  expect(response.status()).toBe(200);
});
