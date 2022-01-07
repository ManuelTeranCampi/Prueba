import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RutaApiPost = async (req, res) => {
  if (req.method === "GET") {
    console.log("hice un get con post");
    const post = await prisma.post.findMany({
      include: {
        usuario: true,
        categoria: true,
      },
    });
    const entrevista = await prisma.post.findMany({
      include: {
        usuario: true,
        categoria: true,
      },
    });
    res.status(200).json({ post, entrevista });
  }
};
export default RutaApiPost;
