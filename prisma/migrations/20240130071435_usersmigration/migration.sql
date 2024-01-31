-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `emailid` VARCHAR(50) NOT NULL,
    `mobileno` VARCHAR(50) NOT NULL,
    `address` VARCHAR(150) NOT NULL,
    `date` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
