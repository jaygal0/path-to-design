/*
  Warnings:

  - You are about to drop the column `companySizeId` on the `Companies` table. All the data in the column will be lost.
  - You are about to drop the column `countriesId` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `dribble` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `salariesId` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanySize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Countries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Salaries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_designerId_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_questionsid_fkey";

-- DropForeignKey
ALTER TABLE "Companies" DROP CONSTRAINT "Companies_companySizeId_fkey";

-- DropForeignKey
ALTER TABLE "Designers" DROP CONSTRAINT "Designers_countriesId_fkey";

-- DropForeignKey
ALTER TABLE "Designers" DROP CONSTRAINT "Designers_salariesId_fkey";

-- AlterTable
ALTER TABLE "Companies" DROP COLUMN "companySizeId",
ADD COLUMN     "companySize" TEXT;

-- AlterTable
ALTER TABLE "Designers" DROP COLUMN "countriesId",
DROP COLUMN "dribble",
DROP COLUMN "salariesId",
DROP COLUMN "url",
ADD COLUMN     "advice" TEXT[],
ADD COLUMN     "country" TEXT,
ADD COLUMN     "difficulties" TEXT[],
ADD COLUMN     "dribbble" TEXT,
ADD COLUMN     "getStarted" TEXT[],
ADD COLUMN     "incorporateApps" TEXT[],
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "regrets" TEXT[],
ADD COLUMN     "responsibilites" TEXT[],
ADD COLUMN     "stayInspired" TEXT[],
ADD COLUMN     "website" TEXT;

-- DropTable
DROP TABLE "Answers";

-- DropTable
DROP TABLE "CompanySize";

-- DropTable
DROP TABLE "Countries";

-- DropTable
DROP TABLE "Questions";

-- DropTable
DROP TABLE "Salaries";
