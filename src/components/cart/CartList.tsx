"use client";

import { Item } from "@/types/types";
import CartCard from "./CartCard";

export default function CartList({ data }: { data: Item[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {data?.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
}
