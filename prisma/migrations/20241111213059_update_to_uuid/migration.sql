/*
  Warnings:

  - The primary key for the `Designers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Designers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_AppsToDesigners` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_BooksToDesigners` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_AppsToDesigners" DROP CONSTRAINT "_AppsToDesigners_B_fkey";

-- DropForeignKey
ALTER TABLE "_BooksToDesigners" DROP CONSTRAINT "_BooksToDesigners_B_fkey";

-- AlterTable
ALTER TABLE "Designers" DROP CONSTRAINT "Designers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Designers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_AppsToDesigners" DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_BooksToDesigners" DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_AppsToDesigners_AB_unique" ON "_AppsToDesigners"("A", "B");

-- CreateIndex
CREATE INDEX "_AppsToDesigners_B_index" ON "_AppsToDesigners"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BooksToDesigners_AB_unique" ON "_BooksToDesigners"("A", "B");

-- CreateIndex
CREATE INDEX "_BooksToDesigners_B_index" ON "_BooksToDesigners"("B");

-- AddForeignKey
ALTER TABLE "_AppsToDesigners" ADD CONSTRAINT "_AppsToDesigners_B_fkey" FOREIGN KEY ("B") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BooksToDesigners" ADD CONSTRAINT "_BooksToDesigners_B_fkey" FOREIGN KEY ("B") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
