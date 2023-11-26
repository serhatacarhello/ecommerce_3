"use client";

import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface Image {
  _id: string;
  public_id: string;
  url: string;
}

interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
}

interface Review {
  _id: string;
  user: User;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  productId: string;
  images: Image[];
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  // let productRating =
  //   product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
  //   product?.reviews?.length;
  return (
    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-fit rounded-lg">
        {/* like button */}
        <div className="absolute z-20 flex flex-col top-0 right-0 p-3">
          <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {product.images && product.images.length > 0 && (
          <div className="flex relative h-[250px]">
            <Image
              src={product.images[0].url} // 0. indeksi kullanıyorum
              alt=""
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
      <div className="p-3 pb-5 sm:p-5 bg-red-50">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating name="read-only" value={4} readOnly />
        </div>

        <div className="flex space-x-2 text-sm font-medium justify-between items-center">
          <button className="transition ease-in duration-300 inline-flex items-center gap-1 text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
            <span className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
              {product.price}
              <span>&#8378;</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => router.push(`product/${product._id}`)}
            className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
