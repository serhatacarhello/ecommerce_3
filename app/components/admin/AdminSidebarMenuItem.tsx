import Link from "next/link";
import React, { ReactNode } from "react";

interface AdminSidebarMenuItemProps {
  selected?: boolean;
  label: string;
  icon: ReactNode;
  link: string;
}
const AdminSidebarMenuItem: React.FC<AdminSidebarMenuItemProps> = ({
  selected,
  label,
  icon,
  link,
}) => {
  return (
    <div className="group">
      <Link
        href={link}
        className={`${
          selected ? "text-blue-500 font-semibold" : "text-gray-700"
        } flex items-center py-2 px-4 hover:bg-slate-200`}
      >
        <span className="mr-2 group-hover:text-blue-600 text-2xl">{icon}</span>{" "}
        {/* Render the icon */}
        <p className="hidden sm:flex   group-hover:text-blue-600 md:text-lg">
          {label}
        </p>
      </Link>
    </div>
  );
};

export default AdminSidebarMenuItem;

// go and create a model for product under prisma 
