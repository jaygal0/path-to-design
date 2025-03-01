/*
  Warnings:

  - You are about to drop the column `BooksText` on the `Designers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Designers" DROP COLUMN "BooksText",
ADD COLUMN     "booksText" TEXT;
