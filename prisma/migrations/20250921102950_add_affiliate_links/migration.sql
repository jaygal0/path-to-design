-- AlterTable
ALTER TABLE "Apps" ADD COLUMN     "affiliateLinksId" TEXT;

-- CreateTable
CREATE TABLE "AffiliateLinks" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AffiliateLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Apps" ADD CONSTRAINT "Apps_affiliateLinksId_fkey" FOREIGN KEY ("affiliateLinksId") REFERENCES "AffiliateLinks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
