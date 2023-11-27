"use client";

import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
const RegisterClient = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <AuthContainer>
      <div className="w-full max-w-md p-2 sm:p-3 shadow-lg rounded-md">
        <Heading text="Sign up" center />
        <Input
          id="name"
          placeholder="Name"
          type="text"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          placeholder="Email"
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
          <Button text="Register" onClick={handleSubmit(onSubmit)} small />
          <div className="flex self-center flex-1 text-lg font-semibold text-slate-500">
            OR
          </div>
          <Button
            text="Sing up with Google"
            onClick={() => {}}
            outline
            icon={<FcGoogle size={25} />}
          />
        </div>
        <div className="text-green-500 my-2 ps-1">
          Already registered?{" "}
          <span
            onClick={() => router.push("/login")}
            className="underline hover:no-underline hover:opacity-80  transition-all duration-300 ease-in"
          >
            Sign in
          </span>
        </div>
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
