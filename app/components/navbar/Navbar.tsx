import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import CartCount from "./CartCount";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl w-full gap-3 md:gap-10 px-2 md:px-4 h-16 bg-orange-600 text-slate-100">
      <Logo />
      <Search />
      <CartCount />
      <User />
      <HamburgerMenu />
    </nav>
  );
}
