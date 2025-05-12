"use client";

import { Item } from "@/types/types";
import DessertCard from "./DessertCard";

export default function DessertsList({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-medium">Would you like to try our dessert ?</h1>
      <div className="flex flex-row max-h-50 w-full overflow-auto gap-2">
        {items.map((item) => (
          <DessertCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
