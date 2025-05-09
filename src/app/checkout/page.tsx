"use client";
import { CartLine } from "@/components/cart/CartLine";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import {
  useCartPrice,
  useItemStore,
  useCartQuantity,
} from "@/lib/store/item-store";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const totalPrice = useCartPrice();
  const { cartItems } = useItemStore();
  const quantityTotal = useCartQuantity();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium">Cart</h1>
        <p className="text-lg font-medium"> {formatPrice(totalPrice)} </p>
      </div>
      <div className="flex flex-col overflow-y-auto px-2">
        {Object.values(cartItems).map((cartItem) => (
          <CartLine cartItem={cartItem} key={cartItem.item.id} />
        ))}
      </div>
      {quantityTotal > 0 ? (
        <div className="inline-flex items-center gap-4">
          <Button className="flex-grow">Confirm your order</Button>
        </div>
      ) : (
        <div className="inline-flex items-center gap-4">
          <Button className="flex-grow" onClick={() => router.push("/items")}>
            Back to shop
          </Button>
        </div>
      )}
    </div>
  );
}
