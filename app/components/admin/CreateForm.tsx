"use client";

import React, { ChangeEvent, useState } from "react";
import Heading from "../general/Heading";

import Input from "../general/Input";
import Button from "../general/Button";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Checkbox from "../general/Checkbox";
import { MdComputer, MdOutlineSportsTennis } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
import { IoIosTabletPortrait } from "react-icons/io";
import { CiMicrophoneOn } from "react-icons/ci";
import {
  FaLaptop,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaHome,
  FaBookOpen,
} from "react-icons/fa";
import ChoiceInput from "../general/ChoiceInput";
import toast from "react-hot-toast";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import { resolve } from "path";
import FileInput from "../general/FileInput";

const CreateForm = () => {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const categoryList = [
    { name: "Computer", icon: <MdComputer /> },
    { name: "Shoes", icon: <GiRunningShoe /> },
    { name: "Tablet", icon: <IoIosTabletPortrait /> },
    { name: "Microphone", icon: <CiMicrophoneOn /> },
    { name: "Sport", icon: <MdOutlineSportsTennis /> },
    { name: "Electronic", icon: <FaLaptop /> },
    { name: "Mobiles", icon: <FaMobileAlt /> },
    { name: "Audio", icon: <FaHeadphonesAlt /> },
    { name: "Books", icon: <FaBookOpen /> },
    { name: "Home", icon: <FaHome /> },
  ];

  const {
    register,
    watch,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      inStock: false,
      image: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("🚀 ~ file: CreateForm.tsx:30 ~ CreateForm ~ data:", data);
    let uploadedImage: string | null;
    // Add logic to handle form submission
    const handleChange = async (): Promise<string | null> => {
      try {
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, `images/${image?.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        return new Promise<string | null>((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              toast.success("Upload is " + progress + "% done");
              // switch (snapshot.state) {
              //   case "paused":
              //     toast.success("Upload is paused");
              //     break;
              //   case "running":
              //     toast.success("Upload is running");
              //     break;
              // }
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                uploadedImage = downloadURL;
                resolve(downloadURL);
              });
            }
          );
        });
      } catch (error) {
        console.log(error);
        toast.error("An error has occurred.");
        return null;
      }
    };

    uploadedImage = await handleChange();
    const newData = {
      ...data,
      image: uploadedImage,
    };
    console.log(
      "🚀 ~ file: CreateForm.tsx:114 ~ constonSubmit:SubmitHandler<FieldValues>= ~ newData:",
      newData
    );
  };

  const category = watch("category");
  const setCustomValue = (name: string, value: any) => {
    setValue(name, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleFileInputFunc = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files.length > 0) {
      setImage(evt.target.files[0]);
    }
  };
  console.log(image);

  return (
    <div className="w-full max-w-md p-2 sm:p-3 shadow-lg rounded-md  py-5 bg-red-100">
      <Heading text="Add Product" center />

      <Input
        id="name"
        placeholder="Product Name"
        type="text"
        register={register}
        errors={errors}
      />

      <Input
        id="description"
        placeholder="Product Description"
        type="text"
        register={register}
        errors={errors}
      />

      <Input
        id="price"
        placeholder="Product Price"
        type="number"
        register={register}
        errors={errors}
      />

      <Input
        id="brand"
        placeholder="Product Brand"
        type="text"
        register={register}
        errors={errors}
      />
      <div className="flex items-center flex-wrap gap-1 my-2">
        {/* category */}
        <label
          className={`block w-full mb-2 text-sm font-medium text-green-700 dark:text-green-500`}
        >
          Category
        </label>
        {categoryList.map((categoryItem) => (
          <ChoiceInput
            key={categoryItem.name}
            text={categoryItem.name}
            icon={categoryItem.icon}
            onClick={() => setCustomValue("category", categoryItem.name)}
            selected={category === categoryItem.name}
          />
        ))}
      </div>
      <Checkbox id="inStock" label="In Stock?" register={register} />

      <FileInput
        id="image" // Replace with the appropriate ID
        type="file"
        placeholder="Product Image"
        register={register}
        required
        errors={errors}
        onChange={handleFileInputFunc} // Pass your file input change handler
      />
      

      <div className="flex flex-col gap-1 items-center justify-center">
        <Button text="Add Product" onClick={handleSubmit(onSubmit)} small />
      </div>
    </div>
  );
};

export default CreateForm;
