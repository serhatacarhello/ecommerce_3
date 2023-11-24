"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import { IoCartOutline } from "react-icons/io5";
import Comment from "./Comment";
import Heading from "../general/Heading";

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

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: Image[];
  reviews: Review[];
  stock: number;
  inStock: boolean;
};

type DetailClientProps = {
  product: Product;
};

const DetailClient: React.FC<DetailClientProps> = ({ product }) => {
  console.log("🚀 ~ file: DetailClient.tsx:30 ~ product:", product);

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFunc = () => {
    if (cardProduct.quantity > 1) {
      setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };

  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    images: product.images,
    reviews: product.reviews,
    stock: product.stock,
    inStock: product.stock > 0,
  });
  return (
    <div className="my-10">
      <PageContainer>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            {product.images.map((image, i) => (
              <Image
                key={image._id}
                className={
                  i > 1 ? "hidden" : `block w-full ${i == 1 && "mt-3"}`
                }
                alt={image.public_id}
                src={image.url}
                height={680}
                width={480}
              />
            ))}
          </div>
          <div className="md:hidden">
            <Image
              className="w-full"
              alt=""
              src={product.images[2].url}
              height={680}
              width={480}
            />
            <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0 relative">
              {product.images.map((image, i) => (
                <Image
                  key={image._id}
                  className="md:w-48 md:h-48 w-full"
                  alt={image.public_id}
                  src={image.url}
                  width={192}
                  height={192}
                />
              ))}
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
                {product.category}
              </p>
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                {product.name}
              </h1>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                Colours
              </p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                  Smoke Blue with red accents
                </p>
                <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer" />
                <svg
                  className="cursor-pointer text-gray-300 dark:text-white"
                  width={6}
                  height={10}
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                Size
              </p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                  38.2
                </p>
                <svg
                  className="text-gray-300 dark:text-white cursor-pointer"
                  width={6}
                  height={10}
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              Rating <Rating name="read-only" value={productRating} readOnly />
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              Price{" "}
              <span>
                {product.price} <span>&#8378;</span>
              </span>
            </div>
            {/* stock */}
            <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
              <svg
                className="mr-3 text-white dark:text-gray-900"
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66699 4.83333V4.84166"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.333 11.5V11.5083"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {product.stock > 0 ? "In stock " : "Check availability in store"}
            </button>
            <div className="">
              <Counter
                cardProduct={cardProduct}
                increaseFunc={increaseFunc}
                decreaseFunc={decreaseFunc}
              />
            </div>
            <Button
              text="Add to Cart"
              onClick={(e) => {
                console.log(e);
              }}
              outline
              icon={<IoCartOutline size={24} />}
              disabled={product.stock == 0}
            />
            <div>
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                {product.description}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
                Product Code:{product._id}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Length: 13.2 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Height: 10 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Depth: 5.1 inches
              </p>
              <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
                Composition: 100% calf leather, inside: 100% lamb leather
              </p>
            </div>
            <div>
              <div className="border-t border-b py-4 mt-7 border-gray-200">
                <div
                  data-menu
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                    Shipping and returns
                  </p>
                  <button
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                    role="button"
                    aria-label="show or hide"
                  >
                    <svg
                      className="transform text-gray-300 dark:text-white"
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                  id="sect"
                >
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are nonrefundable
                </div>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-200">
                <div
                  data-menu
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                    Contact us
                  </p>
                  <button
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                    role="button"
                    aria-label="show or hide"
                  >
                    <svg
                      className="transform text-gray-300 dark:text-white"
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                  id="sect"
                >
                  If you have any questions on how to return your item to us,
                  contact us.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading text="Reviews" />
        <div className="border border-b-2"></div>
        <div className="flex flex-col items-start justify-center gap-3 md:gap-5">
          {product?.reviews?.map((review: Review) => {
            console.log("🚀 ~ file: DetailClient.tsx:366 ~ review:", review);
            return <Comment key={review._id} prd={review} />;
          })}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
