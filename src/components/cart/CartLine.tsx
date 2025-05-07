import { formatPrice } from "@/lib/format-price";
import { CartItem, Item } from "@/types/types";
import { Minus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export function CartLine({
  cartItem,
  removeItem,
}: {
  cartItem: CartItem;
  removeItem: (item: Item) => void;
}) {
  const item = cartItem.item;

  return (
    <div key={item.id} className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">
            {formatPrice(item.price)} × {cartItem.quantity}
          </p>
        </div>
      </div>
      <div className="inline-flex items-center gap-4">
        <p className="font-medium">
          {formatPrice(item.price * cartItem.quantity)}
        </p>
        <Button
          size="sm"
          onClick={() => removeItem(item)}
          disabled={cartItem.quantity <= 0}
        >
          {cartItem.quantity <= 1 ? <Trash2 /> : <Minus size={2} />}
        </Button>
      </div>
    </div>
  );
}
