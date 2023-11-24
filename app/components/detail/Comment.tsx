"use client";
import { Rating } from "@mui/material";
import React from "react";
import Avatar from "../general/Avatar";
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

interface CommentProps {
  prd: Review;
}
const Comment: React.FC<CommentProps> = ({ prd }) => {
  console.log("🚀 ~ file: Comment.tsx:23 ~ prd:", prd);
  return (
    <figure className="max-w-screen-md border-b-2 w-full p-3 md:p-5">
      <Rating name="read-only" value={3} readOnly />
      <blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {prd.comment}
        </p>
      </blockquote>
      <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
        <Avatar
          image={prd.user.avatar}
          size="25"
          userName={prd.user.username}
          width={25}
          height={25}
        />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
          <cite className="pe-3 font-medium text-gray-900 dark:text-white">
            {prd.user.username}
          </cite>
          <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
            {prd.user.email}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default Comment;
