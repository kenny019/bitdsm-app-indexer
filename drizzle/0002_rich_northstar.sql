CREATE TABLE IF NOT EXISTS "sync_state" (
	"id" text PRIMARY KEY DEFAULT 'latest' NOT NULL,
	"latestBlock" integer NOT NULL
);
