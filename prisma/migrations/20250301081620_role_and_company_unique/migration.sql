/*
  Warnings:

  - A unique constraint covering the columns `[company]` on the table `Companies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Companies_company_key" ON "Companies"("company");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_role_key" ON "Roles"("role");
