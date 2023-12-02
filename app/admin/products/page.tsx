import getProducts from "@/app/actions/getProducts";
import AdminProductsClient from "@/app/components/admin/AdminProductsClient";
import AdminContainer from "@/app/components/containers/AdminContainer";

const Products = async () => {
  const products = await getProducts({ category: null, search: null });

  return (
    <AdminContainer>
      <AdminProductsClient products={products} />
    </AdminContainer>
  );
};

export default Products;
