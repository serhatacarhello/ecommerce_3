import CreateForm from "@/app/components/admin/CreateForm";
import AdminContainer from "@/app/components/containers/AdminContainer";
import React from "react";

const CreateProduct = async () => {
  return (
    <AdminContainer>
      <CreateForm />
    </AdminContainer>
  );
};

export default CreateProduct;
