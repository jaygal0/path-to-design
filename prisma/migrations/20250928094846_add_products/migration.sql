-- AlterTable
ALTER TABLE "Designers" ADD COLUMN     "productsText" TEXT;

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductsToDesigners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToDesigners_AB_unique" ON "_ProductsToDesigners"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToDesigners_B_index" ON "_ProductsToDesigners"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToDesigners" ADD CONSTRAINT "_ProductsToDesigners_A_fkey" FOREIGN KEY ("A") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToDesigners" ADD CONSTRAINT "_ProductsToDesigners_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
