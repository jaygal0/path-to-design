/*
  Warnings:

  - A unique constraint covering the columns `[app]` on the table `Apps` will be added. If there are existing duplicate values, this will fail.
  - Made the column `app` on table `Apps` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Apps" ALTER COLUMN "app" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Apps_app_key" ON "Apps"("app");
