/*
  Warnings:

  - Added the required column `updated_at` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL COLLATE NOCASE, 
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_clients" ("adress", "created_at", "id", "name", "phone") SELECT "adress", "created_at", "id", "name", "phone" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
