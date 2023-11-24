import DetailClient from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";
import React from "react";

type DetailProps = {
  productId?: string;
};

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

const Detail: React.FC<{ params: DetailProps }> = ({ params }) => {
  const { productId } = params;
  const product = products.find((product) => product._id === productId) 
  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }


  return (
    <div>
      {/* Make sure to pass the product without the type declaration */}
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
