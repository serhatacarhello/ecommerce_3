import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
export const POST = async (req: Request) => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser?.role !== "ADMIN") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const { name, description, price, brand, category, inStock, image} =
    body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price: parseFloat(price),
      brand,
      category,
      inStock,
      image,
    },
  });

  return NextResponse.json(product, { status: 201 });
};
