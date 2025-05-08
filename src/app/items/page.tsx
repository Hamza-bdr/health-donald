"use client";

import { getItems } from "@/lib/items/getItems";
import useSWR from "swr";
import { Loader2 } from "lucide-react";
import { CartFooter } from "@/components/cart/CartFooter";
import CartCard from "@/components/cart/CartCard";
import CategoryList from "@/components/category/CategoryList";
import CartList from "@/components/cart/CartList";

export default function ItemsPage() {
  const { data, error, isLoading } = useSWR("/items", getItems);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Error loading items</h1>
        <p className="text-lg">Please try again later.</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Loader2 className="animate-spin text-green-300" size={60} />
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <CategoryList />
      <div className="flex flex-col gap-2 p-2 w-fit overflow-y-auto">
        <CartList data={data || []} />
        <CartFooter />
      </div>
    </div>
  );
}
