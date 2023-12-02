"use client";

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

interface UserProps {
  currentUser: User | null | undefined;
}

export const Auth: React.FC<UserProps> = ({ currentUser }) => {
  console.log("🚀 ~ file: Auth.tsx:15 ~ currentUser:", currentUser);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  const loginMenuItems = [
    {
      name: "Admin",
      url: "/admin",
    },
    {
      name: "Logout",
      url: "/",
    },
  ];
  const menuItems = [
    {
      name: "Register",
      url: "/register",
    },
    {
      name: "Sign in",
      url: "/login",
    },
  ];

  const menuFunc = async (url: string, name: string) => {
    if (name === "Logout") {
      router.push(url);
      await signOut();
    } else {
      router.push(url);
    }
    toggleMenu();
  };

  return (
    <div className="hidden md:flex relative">
      <div
        onClick={toggleMenu}
        className="flex items-center justify-center gap-1 cursor-pointer"
      >
        <div className="">
          {currentUser ? (
            currentUser.image && currentUser.name ? (
              <div className="relative w-10 h-10 bg-transparent">
                <Image
                  className="object-cover rounded-full"
                  src={currentUser?.image}
                  alt={currentUser?.name}
                  fill
                />
              </div>
            ) : (
              <FaRegUserCircle size={25} />
            )
          ) : (
            <FaRegUserCircle size={25} />
          )}
        </div>
        <div className="flex flex-nowrap  truncate">
          {" "}
          {currentUser ? currentUser.name : "User"}
        </div>
      </div>
      {openMenu && (
        <div className="absolute z-50 w-32 top-10 bg-white dark:bg-gray-800 shadow-lg right-0 rounded-md  text-slate-500 dark:text-white">
          <div className="space-y-2">
            {currentUser
              ? loginMenuItems.map((item) => (
                  <div
                    key={item.name}
                    className="cursor-pointer hover:text-white hover:bg-slate-700  p-2 rounded-md transition-all duration-300 ease-in-out"
                    onClick={() => menuFunc(item.url, item.name)}
                  >
                    {item.name}
                  </div>
                ))
              : menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="cursor-pointer hover:text-white hover:bg-slate-700  p-2 rounded-md transition-all duration-300 ease-in-out"
                    onClick={() => menuFunc(item.url, item.name)}
                  >
                    {item.name}
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
