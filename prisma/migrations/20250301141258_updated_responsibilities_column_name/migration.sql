/*
  Warnings:

  - You are about to drop the column `responsibilites` on the `Designers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Designers" DROP COLUMN "responsibilites",
ADD COLUMN     "responsibilities" TEXT;
