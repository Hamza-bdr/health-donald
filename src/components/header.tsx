"use client";
import Logo from "../app/Logo";
import { User, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { useUserStore } from "@/lib/store/user-store";

export default function Header() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  return (
    <header className="flex items-center gap-2 px-4 py-2 border-b">
      <Logo size={40} />

      <div className="ml-auto inline-flex items-center gap-3">
        {user && (
          <button
            className="inline-flex items-center gap-1"
            onClick={() => logout()}
          >
            <User size={20} /> <span>{user}</span>
          </button>
        )}
        <Button size="sm" variant="outline">
          <ShoppingBasket size={12} />
        </Button>
      </div>
    </header>
  );
}
