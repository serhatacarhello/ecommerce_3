import LoadingBanner from "./components/general/LoadingBanner";
import Banner from "./components/home/Banner";
import Category from "./components/home/Category";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <div className="w-full bg-cyan-50">
      <Category />
      <Banner />
      <LoadingBanner />
      <Products />
    </div>
  );
}
