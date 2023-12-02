"use client";

import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productCartQty: number;
  cartProducts: CardProductProps[];
  addToBasket: (product: CardProductProps) => void;
  removeFromBasket: (product: CardProductProps) => void;
  removeCart: () => void;
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CardProductProps[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    storedCart ? setCartProducts(JSON.parse(storedCart)) : null;
  }, []);

  const addToBasket: (product: CardProductProps) => void = useCallback(
    (product: CardProductProps) => {
      setCartProducts((prev) => {
        let updatedCart;
        const isExist = prev?.some((p) => p.id === product.id);
        if (isExist) {
          updatedCart = prev.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          );
        } else {
          setProductCartQty((prevQty) => prevQty + 1);
          updatedCart = [...prev, product];
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
      toast.success("Product successfully added!");
    },
    []
  );

  const removeFromBasket = useCallback(
    (product: CardProductProps) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter(
          (p) => p.id !== product.id
        );
        toast.success("Product successfully deleted!");
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
        setCartProducts(filteredProducts);
      }
    },
    [cartProducts]
  );

  const removeCart = useCallback(() => {
    setCartProducts([]);
    toast.success("Products successfully deleted!");
    localStorage.setItem("cart", JSON.stringify([]));
  }, [setCartProducts]);

  const addToBasketIncrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity === 10) {
        return toast.error("It's not permitted to add more product");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const currentProductIndex = cartProducts.findIndex(
          (p) => p.id === product.id
        );
        if (currentProductIndex > -1) {
          updatedCart[currentProductIndex].quantity = ++updatedCart[
            currentProductIndex
          ].quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );
  const addToBasketDecrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("It's not permitted to add fewer products");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const currentProductIndex = cartProducts.findIndex(
          (p) => p.id === product.id
        );
        if (currentProductIndex > -1) {
          updatedCart[currentProductIndex].quantity = --updatedCart[
            currentProductIndex
          ].quantity;
        }
        // updatedCart[currentProductIndex].quantity = updatedCart[currentProductIndex].quantity - 1;
        // updatedCart[currentProductIndex].quantity -= 1;

        setCartProducts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  let contextValue = {
    productCartQty,
    cartProducts,
    addToBasket,
    removeFromBasket,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  };
  return <CartContext.Provider value={contextValue} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default useCart;

