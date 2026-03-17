-- AlterTable
ALTER TABLE "Subscriber"
ADD COLUMN "marketingConsent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "consentGivenAt" TIMESTAMP(3);
