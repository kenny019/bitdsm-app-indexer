import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const appsTable = pgTable("apps", {
  id: text().primaryKey(),
  name: text(),
  description: text(),
  url: text(),
  block: integer().notNull(),
  txHash: text().notNull(),
  logo: text(),
});

export const syncStateTable = pgTable("sync_state", {
  id: text().primaryKey().default("latest"),
  latestBlock: integer().notNull(),
});

export type App = typeof appsTable.$inferSelect;
export type SyncState = typeof syncStateTable.$inferSelect;
