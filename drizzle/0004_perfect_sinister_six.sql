CREATE TABLE IF NOT EXISTS "tvl" (
	"id" text PRIMARY KEY NOT NULL,
	"tvl" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "apps" ADD COLUMN "tvl" text;