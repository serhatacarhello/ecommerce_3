const WarningText = ({ children }: { children: string }) => {
  return (
    <div className="h-screen w-full min-w-fit flex items-center justify-center">
      <div className="bg-yellow-200 text-yellow-800 p-4 md:p-6 lg:p-8 xl:p-10 rounded-md shadow-md dark:bg-gray-800 dark:text-gray-300  max-w-md">
        {children}
      </div>
    </div>
  );
};

export default WarningText;
