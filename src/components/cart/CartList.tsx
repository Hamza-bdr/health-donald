"use client";

import CartCard from "./CartCard";
import { getItems } from "@/lib/items/getItems";
import { useCategoryStore } from "@/lib/store/category-store";
import { Loader2 } from "lucide-react";
import useSWR from "swr";

export default function CartList() {
  const categoryName = useCategoryStore().category.name;
  const { data, error, isLoading } = useSWR(
    `/items/${categoryName}`,
    async () => getItems(categoryName)
  );

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
      <div>
        <Loader2 className="animate-spin text-green-400" size={50} />
      </div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {data?.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
}
