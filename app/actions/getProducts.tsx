import prisma from "@/libs/prismadb";

interface IParamsProps {
  category?: string | null;
  search?: string | null;
}

export default async function getProducts(params: IParamsProps) {
  console.log("🚀 ~ file: getProducts.tsx:9 ~ getProducts ~ params:", params);
  const { category, search } = params;

  let searchString = search || "";

  let query: any = {};
  if (category) query.category = category;

  try {
    const products = await prisma?.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: "insensitive",
            },
            description: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
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
      orderBy: [
        {
          price: "desc",
        },
        {
          name: "asc",
        },
      ],
    });

    return products;
  } catch (error: any) {
    console.log("🚀 ~ file: getProducts.tsx:52 ~ getProducts ~ error:", error);
    throw new Error(error);
  }
}
