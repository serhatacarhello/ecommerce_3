"use client";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";
import { FaUsers } from "react-icons/fa6";
import { TbMailbox } from "react-icons/tb";
import { AiOutlineEdit } from "react-icons/ai";
import AdminSidebarMenuItem from "./AdminSidebarMenuItem";
import { usePathname } from "next/navigation";
export const adminDashboardMenu = [
  {
    id: 1,
    label: "Dashboard",
    icon: <MdOutlineDashboard />,
    link: "/admin",
  },
  {
    id: 2,
    label: "Users",
    icon: <FaUsers />,
    link: "/admin/users",
  },
  {
    id: 3,
    label: "Products",
    icon: <LiaProductHunt />,
    link: "/admin/products",
  },
  {
    id: 4,
    label: "Add Product",
    icon: <AiOutlineEdit />,
    link: "/admin/create",
  },
  {
    id: 5,
    label: "Orders",
    icon: <TbMailbox />,
    link: "/admin/orders",
  },
  // Add more menu items as needed
];

const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="md:w-1/6  border-r h-screen min-w-fit">
      {adminDashboardMenu.map((admin) => (
        <AdminSidebarMenuItem
          key={admin.id}
          selected={pathname === admin.link}
          label={admin.label}
          icon={admin.icon}
          link={admin.link}
        />
      ))}
    </div>
  );
};

export default AdminSidebar;
