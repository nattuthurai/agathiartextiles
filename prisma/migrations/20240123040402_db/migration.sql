/*
  Warnings:

  - You are about to drop the `yarn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `yarn`;

-- CreateTable
CREATE TABLE `Yarns` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `date` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
