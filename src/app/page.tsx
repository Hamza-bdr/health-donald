"use client";

import { useUserStore } from "@/lib/store/user-store";
import Login from "./login/page";

export default function Home() {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Login />;
  }

  return <div>Hello HealthDonald</div>;
}
