"use client";
import useCart from "@/hooks/useCart";
import React, { useEffect } from "react";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

interface CartClientProps {
  currentUser: User | null | undefined;
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
  const router = useRouter();
  const {
    cartProducts,
    removeFromBasket,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = useCart();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  });

  console.log(
    "🚀 ~ file: CartClient.tsx:8 ~ CartClient ~ cartProducts:",
    cartProducts
  );
  const cartProductsTotal = cartProducts.reduce(
    (acc, item: CardProductProps) => acc + item.quantity * item.price,
    0
  );

  if (!cartProducts || cartProducts.length === 0)
    return <div className="">There is no product in your cart</div>;
  return (
    <div>
      <PageContainer>
        <div className="flex flex-col md:flex-row w-screen min-h-screen px-14 py-7">
          {/* My Cart */}
          <div className="w-full flex flex-col h-fit gap-4 p-4 ">
            <div className="flex items-center justify-between">
              <p className="text-blue-900 text-xl font-extrabold">My cart</p>
              {/* remove cart */}
              <div
                onClick={removeCart}
                className="text-red-500 hover:text-red-800 text-xl font-semibold  transition-all ease-in duration-200  hover:px-2  hover:rounded-md shadow hover:shadow-md  "
              >
                Clear All
              </div>
            </div>

            {/* Product */}
            {cartProducts?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm"
              >
                <div className="flex flex-col md:flex-row gap-3 justify-between ">
                  {/* Product Information */}
                  <div className="flex flex-row gap-6 items-center">
                    <div className="relative w-28 h-28">
                      <Image
                        className=" object-cover"
                        src={product.images[0].url}
                        alt={product.name}
                        fill
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-lg text-gray-800 font-semibold">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        Category:{" "}
                        <span className="font-normal">{product.name}</span>
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        Size: <span className="font-normal">42</span>
                      </p>
                    </div>
                  </div>
                  {/* Price Information */}
                  <div className="self-center text-center">
                    <p className="text-gray-600 font-normal text-sm line-through">
                      {product.price}
                      <span className="text-emerald-500 ml-2">(-50% OFF)</span>
                    </p>
                    <p className="text-gray-800 font-normal text-xl">$49.99</p>
                  </div>
                  {/* Remove Product Icon */}
                  <div
                    onClick={() => removeFromBasket(product)}
                    className="self-center transition ease-in duration-300  hover:ring-2 focus:ring-3 hover:ring-red-400  shadow hover:shadow-lg text-gray-500 rounded-full w-8 h-8 text-center p-1"
                  >
                    <AiTwotoneDelete size={25} className="hover:text-red-500" />
                  </div>
                </div>
                {/* Product Quantity */}
                <div className="flex flex-row self-center gap-1">
                  <Counter
                    cardProduct={product}
                    increaseFunc={() => addToBasketIncrease(product)}
                    decreaseFunc={() => addToBasketDecrease(product)}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Purchase Resume */}
          <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
            <p className="text-blue-900 text-xl font-extrabold">
              Purchase Resume
            </p>
            <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
              <div className="flex flex-row justify-between">
                <p className="text-gray-600">Subtotal (2 Items)</p>
                <p className="text-end font-bold">
                  {cartProductsTotal}&nbsp;<span>&#8378;</span>{" "}
                </p>
              </div>
              <hr className="bg-gray-200 h-0.5" />
              <div className="flex flex-row justify-between">
                <p className="text-gray-600">Freight</p>
                <div>
                  <p className="text-end font-bold">
                    15&nbsp;<span>&#8378;</span>
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Arrives on Jul 16
                  </p>
                </div>
              </div>
              <hr className="bg-gray-200 h-0.5" />
              <div className="flex flex-row justify-between">
                <p className="text-gray-600">Discount Coupon</p>
                <a className="text-gray-500 text-base underline" href="#">
                  Add
                </a>
              </div>
              <hr className="bg-gray-200 h-0.5" />
              <div className="flex flex-row justify-between">
                <p className="text-gray-600">Total</p>
                <div>
                  <p className="text-end font-bold">
                    {cartProductsTotal + 15}&nbsp;<span>&#8378;</span>{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
                  FINISH
                </button>
                <button className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md">
                  ADD MORE PRODUCTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
