/*
  Warnings:

  - You are about to drop the `_EventToTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eventId` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_EventToTag` DROP FOREIGN KEY `_EventToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_EventToTag` DROP FOREIGN KEY `_EventToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Tag` ADD COLUMN `eventId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_EventToTag`;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
