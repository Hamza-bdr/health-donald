"use client";

import { CartFooter } from "@/components/cart/CartFooter";
import CategoryList from "@/components/category/CategoryList";
import CartList from "@/components/cart/CartList";

export default function ItemsPage() {
  return (
    <div className="flex h-full">
      <CategoryList />
      <div className="flex flex-col gap-2 p-2 w-fit overflow-y-auto">
        <CartList />
        <CartFooter />
      </div>
    </div>
  );
}
