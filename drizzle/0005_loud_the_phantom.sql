ALTER TABLE "apps" ADD COLUMN "blockNumber" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "apps" DROP COLUMN IF EXISTS "block";