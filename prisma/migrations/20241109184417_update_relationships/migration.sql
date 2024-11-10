-- CreateTable
CREATE TABLE "Designers" (
    "id" TEXT NOT NULL,
    "isPublished" BOOLEAN DEFAULT false,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT,
    "url" TEXT,
    "x" TEXT,
    "instagram" TEXT,
    "dribble" TEXT,
    "oneLiner" TEXT,
    "responsibilites" TEXT,
    "gotStarted" TEXT,
    "advice" TEXT,
    "regrets" TEXT,
    "stayInspired" TEXT,
    "appExplained" TEXT,
    "booksExplained" TEXT,
    "rolesId" TEXT,
    "salariesId" TEXT,
    "countriesId" TEXT,
    "companiesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Designers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answerid" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" TEXT NOT NULL,
    "designersId" TEXT,
    "answer" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apps" (
    "id" TEXT NOT NULL,
    "app" TEXT,
    "desc" TEXT,
    "url" TEXT,
    "designersId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "book" TEXT,
    "author" TEXT,
    "url" TEXT,
    "designersId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "role" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Countries" (
    "id" TEXT NOT NULL,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salaries" (
    "id" TEXT NOT NULL,
    "salary" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Salaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Companies" (
    "id" TEXT NOT NULL,
    "company" TEXT,
    "desc" TEXT,
    "url" TEXT,
    "companySizeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanySize" (
    "id" TEXT NOT NULL,
    "size" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanySize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnswersToDesigners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AppsToDesigners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BooksToDesigners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Designers_slug_key" ON "Designers"("slug");

-- CreateIndex
CREATE INDEX "Designers_slug_idx" ON "Designers"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_AnswersToDesigners_AB_unique" ON "_AnswersToDesigners"("A", "B");

-- CreateIndex
CREATE INDEX "_AnswersToDesigners_B_index" ON "_AnswersToDesigners"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppsToDesigners_AB_unique" ON "_AppsToDesigners"("A", "B");

-- CreateIndex
CREATE INDEX "_AppsToDesigners_B_index" ON "_AppsToDesigners"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BooksToDesigners_AB_unique" ON "_BooksToDesigners"("A", "B");

-- CreateIndex
CREATE INDEX "_BooksToDesigners_B_index" ON "_BooksToDesigners"("B");

-- AddForeignKey
ALTER TABLE "Designers" ADD CONSTRAINT "Designers_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Designers" ADD CONSTRAINT "Designers_salariesId_fkey" FOREIGN KEY ("salariesId") REFERENCES "Salaries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Designers" ADD CONSTRAINT "Designers_countriesId_fkey" FOREIGN KEY ("countriesId") REFERENCES "Countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Designers" ADD CONSTRAINT "Designers_companiesId_fkey" FOREIGN KEY ("companiesId") REFERENCES "Companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_answerid_fkey" FOREIGN KEY ("answerid") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Companies" ADD CONSTRAINT "Companies_companySizeId_fkey" FOREIGN KEY ("companySizeId") REFERENCES "CompanySize"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnswersToDesigners" ADD CONSTRAINT "_AnswersToDesigners_A_fkey" FOREIGN KEY ("A") REFERENCES "Answers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnswersToDesigners" ADD CONSTRAINT "_AnswersToDesigners_B_fkey" FOREIGN KEY ("B") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppsToDesigners" ADD CONSTRAINT "_AppsToDesigners_A_fkey" FOREIGN KEY ("A") REFERENCES "Apps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppsToDesigners" ADD CONSTRAINT "_AppsToDesigners_B_fkey" FOREIGN KEY ("B") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BooksToDesigners" ADD CONSTRAINT "_BooksToDesigners_A_fkey" FOREIGN KEY ("A") REFERENCES "Books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BooksToDesigners" ADD CONSTRAINT "_BooksToDesigners_B_fkey" FOREIGN KEY ("B") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
