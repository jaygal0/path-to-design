-- CreateTable
CREATE TABLE "AppCategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AppsToCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AppCategories_name_key" ON "AppCategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AppsToCategories_AB_unique" ON "_AppsToCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_AppsToCategories_B_index" ON "_AppsToCategories"("B");

-- AddForeignKey
ALTER TABLE "_AppsToCategories" ADD CONSTRAINT "_AppsToCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "AppCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppsToCategories" ADD CONSTRAINT "_AppsToCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Apps"("id") ON DELETE CASCADE ON UPDATE CASCADE;
