import prisma from "@/libs/prismadb";

interface IParams {
  productId?: string;
}

export default async function getProductsId({ productId }: IParams) {
  try {
    const product = await prisma?.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!product) return null;
    return product;
  } catch (error: any) {
    console.log("🚀 ~ file: getProductsId.ts:28 ~ getProductsId ~ error:", error)
    throw new Error(error.message);
  }
}
