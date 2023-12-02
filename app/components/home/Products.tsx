import React from "react";
import Heading from "../general/Heading";
import ProductCard from "./ProductCard";
import { products } from "@/utils/Products";

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
const Products: React.FC = () => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <Heading text={"Tüm Ürünler"} />
      <div className="grid grid-cols-1 gap-x-2 gap-y-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        {products.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        <div className="flex flex-wrap w-full gap-3 md:gap-6 items-center justify-center md:justify-evenly "></div>
      </div>
    </div>
  );
};

export default Products;
