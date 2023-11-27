import React from "react";

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen-custom flex justify-center items-center h-full w-full ">
      {children}
    </div>
  );
};

export default AuthContainer;
