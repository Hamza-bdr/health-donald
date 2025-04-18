"use client";
import Logo from "../app/Logo";
import { User, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { useUserStore } from "@/lib/store";

export default function Header() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  return (
    <header className="flex items-center gap-2 px-4 py-2 border-b">
      <Logo size={40} />

      <div className="ml-auto inline-flex items-center gap-3">
        {user && (
          <div
            className="inline-flex items-center gap-1"
            onClick={() => setUser("")}
          >
            <User size={20} /> <span>{user}</span>
          </div>
        )}
        <Button size="sm" variant="outline">
          <ShoppingBasket size={12} />
        </Button>
      </div>
    </header>
  );
}
