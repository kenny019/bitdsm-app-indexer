import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { AppRunner } from "./services/app-runner.js";
import { getApps, getAppsCount, getTVL } from "./lib/db.js";
import cron from "node-cron";

const app = new Hono();

app.use("/*", cors());

cron.schedule("* * * * *", async () => {
  try {
    await AppRunner();
  } catch (error) {
    console.error("Error running AppRunner:", error);
  }
});

app.get("/apps", async (c) => {
  const apps = await getApps();
  return c.json(apps);
});

app.get("/apps-count", async (c) => {
  const appsCount = await getAppsCount();
  return c.text(appsCount.toString());
});

app.get("/tvl", async (c) => {
  const tvl = await getTVL();
  console.log(tvl);
  return c.text(tvl);
});

const port = 4000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
