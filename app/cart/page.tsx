import React from "react";
import CartClient from "../components/cart/CartClient";
import { getCurrentUser } from "../actions/getCurrentUser";

const Cart = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <CartClient currentUser={currentUser} />
    </div>
  );
};

export default Cart;
