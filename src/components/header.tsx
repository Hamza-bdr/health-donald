"use client";
import Logo from "../app/Logo";
import { User, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { useUserStore } from "@/lib/store/user-store";
import { useRouter } from "next/navigation";

interface itemsType {
  [id: string]: { quantity: number };
}

export default function Header() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const cartItems = useUserStore((state) => state.cartItems);
  const totalItems = Object.values(cartItems as itemsType).reduce(
    (acc: number, value: { quantity: number }) => acc + value.quantity,
    0
  );
  return (
    <header className="flex items-center gap-2 px-4 py-2 border-b">
      <Logo size={40} />

      <div className="ml-auto inline-flex items-center gap-3">
        {user && (
          <Button
            className="inline-flex items-center gap-1"
            onClick={() => {
              router.push("/");
              logout();
            }}
          >
            <User size={20} /> <span>{user}</span>
          </Button>
        )}
        <Button variant="outline">
          <span className="text-md font-medium">{totalItems}</span>
          <ShoppingBasket size={12} />
        </Button>
      </div>
    </header>
  );
}
