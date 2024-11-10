/*
  Warnings:

  - You are about to drop the column `advice` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `gotStarted` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `regrets` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `responsibilites` on the `Designers` table. All the data in the column will be lost.
  - You are about to drop the column `stayInspired` on the `Designers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Designers" DROP COLUMN "advice",
DROP COLUMN "gotStarted",
DROP COLUMN "regrets",
DROP COLUMN "responsibilites",
DROP COLUMN "stayInspired";
