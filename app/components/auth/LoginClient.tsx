"use client";

import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
const LoginClient = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("🚀 ~ file: LoginClient.tsx:21 ~ LoginClient ~ data:", data);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Successfully signed in!");
      } else if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <AuthContainer>
      <div className="w-full max-w-md p-2 sm:p-3 shadow-lg rounded-md">
        <Heading text="Login" center />

        <Input
          id="email"
          placeholder="Email address"
          type="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          register={register}
          errors={errors}
          required
        />
        <div className="flex flex-col gap-1 items-center justify-center">
          {" "}
          <Button text="Sing in" onClick={handleSubmit(onSubmit)} small />
          <div className="flex self-center flex-1 text-lg font-semibold text-slate-500">
            OR
          </div>
          <Button
            text="Log in with Google"
            onClick={() => {}}
            outline
            icon={<FcGoogle size={25} />}
          />
        </div>
        <div className="text-green-500 my-2 ps-1">
          Don&apos;t have an account?&nbsp;
          <span
            onClick={() => router.push("/register")}
            className="underline hover:no-underline  hover:opacity-80 transition-all duration-300 ease-in"
          >
            Sign up
          </span>
        </div>
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
