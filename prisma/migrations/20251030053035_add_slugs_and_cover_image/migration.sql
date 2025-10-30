/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Apps` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Books` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Apps" ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Apps_slug_key" ON "Apps"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Books_slug_key" ON "Books"("slug");
