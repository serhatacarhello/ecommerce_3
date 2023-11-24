import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-[350px] flex items-center justify-center">
      <div className="w-full relative h-full">
        <Image
          src={
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/63190399452021.5f05c18120473.jpg"
          }
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
