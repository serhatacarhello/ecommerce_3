import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";

interface Image {
  _id: string;
  public_id: string;
  url: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  images: Image[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard2: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-[150px]">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {product.images && product.images.length > 0 && (
          <Image
            src={product.images[0].url} // 0. indeksi kullanıyorum
            alt=""
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating name="read-only" value={4} readOnly />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
            {product.price}
            <span>&#8378;</span>
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCard2;
