"use client";
import useCart from "@/hooks/useCart";
import { SlBasket } from "react-icons/sl";

export default function CartCount() {
  const { cartProducts } = useCart();
  return (
    <div className="hidden md:flex relative">
      <SlBasket size={25} />
      <div className="flex items-center justify-center min-w-fit text-sm  bg-orange-800 absolute -top-2 -end-2 w-5 h-5  rounded-full">
        {cartProducts?.length}
      </div>
    </div>
  );
}
