import React from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminContainer from "../components/containers/AdminContainer";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminContainer>
      <AdminSidebar />
      {children}
    </AdminContainer>
  );
};

export default AdminLayout;
