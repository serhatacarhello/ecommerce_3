"use client";
export default function Category() {
  const categoryList = [
    { name: "Ayakkabi" },
    { name: "Giyim" },
    { name: "Elektronik" },
    { name: "Ev Gereçleri" },
    { name: "Spor Malzemeleri" },
    { name: "Kitap" },
  ];
  return (
    <div className="flex items-center justify-center gap-3   md:gap-10  px:3 md:px-10 py-5 md:my-2  overflow-x-auto ">
      {categoryList.map((category) => (
        <div
          key={category.name}
          className="flex flex-1 border border-slate-500 border-1 text-slate-500 w-[120px] min-w-fit rounded-full px-4 py-2 md:py-3  text-center whitespace-nowrap cursor-pointer flex-shrink-0 "
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
