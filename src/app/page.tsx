"use client";

import LoginForm from "@/components/LoginForm";
import { useUserStore } from "@/lib/store";

export default function Home() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <span className="text-2xl font-bold">Welcome to HealthDonald !</span>
      <span className="text-lg ">Login first to access our application</span>
      {!user ? <LoginForm /> : <span className="text-lg">Welcome {user}</span>}
    </div>
  );
}
