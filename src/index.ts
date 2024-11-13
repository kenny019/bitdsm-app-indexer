import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { AppRunner } from "./services/app-runner.js";
import { getApps } from './lib/db.js';
import cron from "node-cron";

const app = new Hono();


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

const port = 4000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
