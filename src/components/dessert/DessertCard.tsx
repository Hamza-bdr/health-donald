"use client";

import { formatPrice } from "@/lib/format-price";
import { useItemStore } from "@/lib/store/item-store";
import { Item } from "@/types/types";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function DessertCard({ item }: { item: Item }) {
  const { addItem } = useItemStore();

  return (
    <div className="flex flex-col justify-between p-2 rounded-md border w-24">
      <p className="font-mono truncate">{formatPrice(item.price)}</p>
      <img className="size-16" src={item.image} alt={item.name} />
      <p className="truncate">{item.name}</p>
      <Button size="icon" onClick={() => addItem(item)}>
        <Plus />
      </Button>
    </div>
  );
}
