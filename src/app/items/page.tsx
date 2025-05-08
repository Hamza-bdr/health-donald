"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getItems } from "@/lib/items/getItems";
import useSWR from "swr";
import { Loader2, MinusIcon, PlusIcon } from "lucide-react";
import { formatPrice } from "./../../lib/format-price";
import { useItemStore } from "@/lib/store/item-store";
import { Item } from "@/types/types";
import { CartFooter } from "@/components/cart/CartFooter";

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
    <>
      <div className="flex flex-col gap-2 p-2 h-full overflow-y-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          {data?.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>
        <CartFooter />
      </div>
    </>
  );
}

function CartButton({ item }: { item: Item }) {
  const { cartItems, addItem, removeItem } = useItemStore();

  return cartItems[item.id]?.quantity > 0 ? (
    <div className="inline-flex gap-3 items-center justify-end">
      <Button size="sm" variant="outline" onClick={() => removeItem(item)}>
        <MinusIcon size={6} />
      </Button>
      <span className="text-md font-semibold">
        {cartItems[item.id]?.quantity}
      </span>
      <Button size="sm" variant="outline" onClick={() => addItem(item)}>
        <PlusIcon size={6} />
      </Button>
    </div>
  ) : (
    <div className="flex justify-end">
      <Button className="flex-grow mx-6" onClick={() => addItem(item)}>
        Add
      </Button>
    </div>
  );
}
function CartCard({ item }: { item: Item }) {
  return (
    <Card className="bg-transparent p-2 shadow-md" key={item.id}>
      <CardHeader className="text-xl font-medium font-mono justify-end">
        {formatPrice(item.price)}
      </CardHeader>
      <CardContent>
        <img className="size-40 m-auto" src={item.image} alt={item.name} />
      </CardContent>
      <CardFooter className="text-lg font-medium justify-center">
        {item.name}
      </CardFooter>
      <CartButton item={item} />
    </Card>
  );
}
