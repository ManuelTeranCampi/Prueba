-- CreateEnum
CREATE TYPE "Enum_TipoCategoria" AS ENUM ('Video', 'Shows', 'Musica', 'Entrevista');

-- CreateEnum
CREATE TYPE "Enum_TipoTipo" AS ENUM ('Estreno', 'Noticia', 'Tiradera');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "nombre_post" TEXT NOT NULL,
    "url_post_img" TEXT NOT NULL,
    "description_post" TEXT NOT NULL,
    "enlace_post" TEXT NOT NULL,
    "enlace_canal_post" TEXT NOT NULL,
    "fecha_post" TIMESTAMP(3) NOT NULL,
    "tipoCategoria" "Enum_TipoCategoria" NOT NULL,
    "tipoTipo" "Enum_TipoTipo" NOT NULL,
    "usuarioId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "correo_usuario" TEXT NOT NULL,
    "password_usuario" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_usuario_key" ON "Usuario"("correo_usuario");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
