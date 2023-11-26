import { CartContextProvider } from "@/hooks/useCart";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default Providers;
