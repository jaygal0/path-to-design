/*
  Warnings:

  - You are about to drop the column `appExplained` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `booksExplained` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `designerId` on the `Questions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_designerId_fkey";

-- AlterTable
ALTER TABLE "Designers" DROP COLUMN "appExplained",
DROP COLUMN "booksExplained";

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "designerId";
