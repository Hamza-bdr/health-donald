"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useUserStore } from "@/lib/store";

export default function LoginForm() {
  const setUser = useUserStore((state) => state.setUser);
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    setUser(name.trim());
  };

  return (
    <form className="inline-flex gap-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
