import Logo from "./Logo";
import Search from "./Search";
import CartCount from "./CartCount";
import Auth from "./Auth";
import HamburgerMenu from "./HamburgerMenu";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export default async function Navbar() {
  const currentUser = await getCurrentUser();
  return (
    <nav className="flex items-center justify-between max-w-screen-xl w-full gap-3 md:gap-10 px-2 md:px-4 h-16 bg-orange-600 text-slate-100">
      <Logo />
      <Search />
      <CartCount />
      <Auth currentUser={currentUser} />
      <HamburgerMenu />
    </nav>
  );
}
