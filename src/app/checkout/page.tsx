"use client";
import { CartLine } from "@/components/cart/CartLine";
import DessertsList from "@/components/dessert/DessertsList";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { getItems } from "@/lib/items/getItems";
import {
  useCartPrice,
  useItemStore,
  useCartQuantity,
} from "@/lib/store/item-store";
import { CartItem } from "@/types/types";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export default function CheckoutPage() {
  const { cartItems } = useItemStore();

  const hasDessert = Object.values(cartItems).some(
    (item: CartItem) => item.item.category === "Dessert"
  );
  const { data } = useSWR(`/items/Dessert`, async () => getItems("Dessert"));

  return (
    <div className="flex flex-col gap-3 p-4 h-full overflow-auto">
      <CheckoutHeader />
      <CheckoutList />
      {!hasDessert && <DessertsList items={data || []} />}
      <CheckoutButton />
    </div>
  );
}

export function CheckoutHeader() {
  const totalPrice = useCartPrice();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-medium">Cart</h1>
      <p className="text-lg font-medium"> {formatPrice(totalPrice)} </p>
    </div>
  );
}
export function CheckoutButton() {
  const quantityTotal = useCartQuantity();
  const router = useRouter();
  return quantityTotal > 0 ? (
    <div className="inline-flex items-center gap-4">
      <Button className="flex-grow" onClick={() => router.push("/success")}>
        Confirm your order
      </Button>
    </div>
  ) : (
    <div className="inline-flex items-center gap-4">
      <Button className="flex-grow" onClick={() => router.push("/")}>
        Back to shop
      </Button>
    </div>
  );
}
export function CheckoutList() {
  const { cartItems } = useItemStore();

  return (
    <div className="flex flex-col overflow-y-auto px-2">
      {Object.values(cartItems).map((cartItem) => (
        <CartLine cartItem={cartItem} key={cartItem.item.id} />
      ))}
    </div>
  );
}
