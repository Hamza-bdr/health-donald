import { useItemStore } from "@/lib/store/item-store";
import { Item } from "@/types/types";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function CartButton({ item }: { item: Item }) {
  const { cartItems, addItem, removeItem } = useItemStore();

  return cartItems[item.id]?.quantity > 0 ? (
    <div className="inline-flex gap-3 items-center justify-end">
      <Button size="icon" variant="outline" onClick={() => removeItem(item)}>
        <MinusIcon />
      </Button>
      <span className="text-md font-semibold">
        {cartItems[item.id]?.quantity}
      </span>
      <Button size="icon" variant="outline" onClick={() => addItem(item)}>
        <PlusIcon />
      </Button>
    </div>
  ) : (
    <div className="flex justify-end items-end w-full">
      <Button
        className="flex flex-grow mx-6 font-medium text-md"
        variant="outline"
        onClick={() => addItem(item)}
      >
        Add
      </Button>
    </div>
  );
}
