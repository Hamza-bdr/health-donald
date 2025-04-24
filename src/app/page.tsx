"use client";

import { useUserStore } from "@/lib/store/user-store";
import Login from "./login/page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useUserStore((state) => state.user);
  const isAdmin = useUserStore((state) => state.isAdmin);
  const router = useRouter();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-4">
      <h1>Welcome {user}</h1>
      {isAdmin ? (
        <h2 className="text-xl">You are an admin</h2>
      ) : (
        <h2 className="text-xl">You are a user</h2>
      )}
      {isAdmin && (
        <div className="sticky bottom-0 right-0">
          <Button onClick={() => router.push("/items/new")}>New</Button>
        </div>
      )}
    </div>
  );
}
