/*
  Warnings:

  - You are about to drop the column `quantidade` on the `livros` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Livros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `editora` to the `Livros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `Livros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcao` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `livros` DROP COLUMN `quantidade`,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL,
    ADD COLUMN `editora` VARCHAR(191) NOT NULL,
    ADD COLUMN `imagem` VARCHAR(191) NOT NULL,
    MODIFY `publicacao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `funcao` ENUM('ADM', 'ALUNO') NOT NULL;

-- CreateTable
CREATE TABLE `Sesi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `unidade` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
