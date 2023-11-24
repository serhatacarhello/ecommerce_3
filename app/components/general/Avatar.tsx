import Image from "next/image";
import React from "react";
import { RxAvatar } from "react-icons/rx";

type AvatarProps = {
  size?: string;
  image?: string;
  userName?: string;
  width: number;
  height: number;
};

const Avatar: React.FC<AvatarProps> = ({
  image,
  size,
  userName,
  width,
  height,
}) => {
  if (image) {
    return (
      <Image
        className="w-9 h-9 rounded-full object-cover"
        src={image}
        alt={userName ? userName : ""}
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <div>
        <RxAvatar size={size} />
      </div>
    );
  }
};

export default Avatar;
