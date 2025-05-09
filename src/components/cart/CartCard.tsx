import { formatPrice } from "@/lib/format-price";
import { Item } from "@/types/types";
import CartButton from "./CartButton";

export default function CartCard({ item }: { item: Item }) {
  return (
    <div
      className="flex flex-col items-center bg-transparent p-4 gap-2 rounded-md shadow-md border"
      key={item.id}
    >
      <p className="text-xl font-medium font-mono justify-end">
        {formatPrice(item.price)}
      </p>
      <img className="size-40" src={item.image} alt={item.name} />
      <p className="flex flex-col text-lg font-medium justify-center">
        {item.name}
      </p>
      <CartButton item={item} />
    </div>
  );
}
