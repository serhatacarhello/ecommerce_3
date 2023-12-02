const AuthContainer = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full  w-full my-4 min-h-fit  ">
      {children}
    </div>
  );
};

export default AuthContainer;
