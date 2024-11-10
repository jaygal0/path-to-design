/*
  Warnings:

  - You are about to drop the column `designersId` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `answerid` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the `_AnswersToDesigners` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_answerid_fkey";

-- DropForeignKey
ALTER TABLE "_AnswersToDesigners" DROP CONSTRAINT "_AnswersToDesigners_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnswersToDesigners" DROP CONSTRAINT "_AnswersToDesigners_B_fkey";

-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "designersId",
ADD COLUMN     "designerId" TEXT;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "answerid",
ADD COLUMN     "answerId" TEXT,
ADD COLUMN     "designerId" TEXT;

-- DropTable
DROP TABLE "_AnswersToDesigners";

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_designerId_fkey" FOREIGN KEY ("designerId") REFERENCES "Designers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_designerId_fkey" FOREIGN KEY ("designerId") REFERENCES "Designers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
