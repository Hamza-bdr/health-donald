"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useUserStore } from "@/lib/store";

export default function LoginForm() {
  const setUser = useUserStore((state) => state.setUser);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.parentElement?.querySelector("input")?.value;
    if (!value) return;
    console.log(value);
    setUser(value);
  };

  return (
    <form className="inline-flex gap-4">
      <Input placeholder="Enter your name" />
      <Button type="submit" onClick={handleClick}>
        Login
      </Button>
    </form>
  );
}
