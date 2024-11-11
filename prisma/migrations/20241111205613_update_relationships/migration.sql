/*
  Warnings:

  - You are about to drop the column `designersId` on the `Apps` table. All the data in the column will be lost.
  - You are about to drop the column `designersId` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `x` on the `Designers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_answerId_fkey";

-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "questionsid" TEXT;

-- AlterTable
ALTER TABLE "Apps" DROP COLUMN "designersId";

-- AlterTable
ALTER TABLE "Books" DROP COLUMN "designersId";

-- AlterTable
ALTER TABLE "Designers" DROP COLUMN "x";

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsid_fkey" FOREIGN KEY ("questionsid") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
