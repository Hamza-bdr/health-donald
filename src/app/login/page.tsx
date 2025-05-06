"use client";

import LoginForm from "@/app/login/LoginForm";
import Image from "next/image";
export default function Login() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-4 py-4">
        <div className="absolute left-4 top-4 rotate-12">
          <Image
            src="/images/healthburger/categories/burger.png"
            alt="burger"
            width={50}
            height={50}
            className="mb-4"
          />
        </div>
        <div className="absolute right-4 top-4 -rotate-6">
          <Image
            src="/images/healthburger/categories/drink.png"
            alt="drink"
            width={50}
            height={50}
            className="mb-4"
          />
        </div>
        <div className="absolute left-2 bottom-2 rotate-6">
          <Image
            src="/images/healthburger/categories/fries.png"
            alt="fries"
            width={50}
            height={50}
            className="mb-4"
          />
        </div>
        <div className="absolute right-2 bottom-2 -rotate-12">
          <Image
            src="/images/healthburger/categories/nuggets.png"
            alt="nuggets"
            width={50}
            height={50}
            className="mb-4"
          />
        </div>
        <h1 className="text-xl font-bold">Welcome to HealthDonald !</h1>
        <p className="text-lg ">Login first to access our application</p>
        <LoginForm />
      </div>
    </>
  );
}
