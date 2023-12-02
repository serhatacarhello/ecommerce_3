import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("🚀 ~ file: route.ts:9 ~ params:", params);
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") return NextResponse.error();

  const deletedProduct = await prisma.product.delete({
    where: {
      id: params.id,
    },
  });

  console.log("🚀 ~ file: route.ts:19 ~ deleteProduct:", deletedProduct);
  return NextResponse.json(deletedProduct);
}
