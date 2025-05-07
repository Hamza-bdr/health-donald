"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useUserStore } from "@/lib/store/user-store";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const login = useUserStore((state) => state.login);
  const user = useUserStore((state) => state.user);
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    login(name.trim());
    setName("");
    router.push("/items");
  };
  return !user ? (
    <form className="inline-flex gap-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  ) : (
    <div className="inline-flex gap-4">
      <h1 className="text-xl">Welcome {user}</h1>
    </div>
  );
}
