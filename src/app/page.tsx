"use client";

import { useUserStore } from "@/lib/store/user-store";
import Login from "./login/page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCartPrice } from "@/lib/store/item-store";
import { formatPrice } from "./../lib/format-price";

export default function Home() {
  const { user, isAdmin } = useUserStore();
  const router = useRouter();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col min-h-full h-full items-stretch justify-between">
      <div className="flex flex-col items-center justify-start gap-4">
        <h1>Welcome {user}</h1>
        {isAdmin ? (
          <h2 className="text-xl">You are an admin</h2>
        ) : (
          <h2 className="text-xl">You are a user</h2>
        )}
        {isAdmin && (
          <Button onClick={() => router.push("/items/new")}>New</Button>
        )}
      </div>
      <CartFooter />
    </div>
  );
}
export function CartFooter() {
  const totalPrice = useCartPrice();

  return (
    <div className="flex items-center gap-4 mx-4 p-4 border-t">
      <Button className="flex-grow">Checkout</Button>
      <h1 className="text-lg font-medium"> {formatPrice(totalPrice)} </h1>
    </div>
  );
}
