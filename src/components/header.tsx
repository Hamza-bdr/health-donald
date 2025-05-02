"use client";
import Logo from "../app/Logo";
import { User, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { useCartQuantity } from "@/lib/store/item-store";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/user-store";

export default function Header() {
  const router = useRouter();
  const { user, logout } = useUserStore();
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
        <ShoppingCart />
      </div>
    </header>
  );
}
const ShoppingCart = () => {
  const totalQuantity = useCartQuantity();

  return (
    <Button variant="outline">
      <span className="text-md font-medium">{totalQuantity}</span>
      <ShoppingBasket size={12} />
    </Button>
  );
};
