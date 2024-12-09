CREATE TABLE IF NOT EXISTS "apps" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"url" text,
	"blockNumber" integer NOT NULL,
	"txHash" text NOT NULL,
	"logo" text,
	"tvl" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sync_state" (
	"id" text PRIMARY KEY DEFAULT 'latest' NOT NULL,
	"latestBlock" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tvl" (
	"id" text PRIMARY KEY NOT NULL,
	"tvl" text NOT NULL
);
