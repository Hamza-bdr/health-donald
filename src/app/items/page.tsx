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
import { useEffect, useState } from "react";
import { useUserStore } from "@/lib/store/user-store";

interface itemsType {
  [id: string]: { quantity: number };
}
export default function ItemsPage() {
  const store = useUserStore();
  const setCartItems = store.setCartItems;
  const { data, error, isLoading } = useSWR("/items", getItems);
  const [items, setItems] = useState<itemsType>({});

  useEffect(() => {
    setCartItems(items);
  }, [items]);

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
  function handleAdd(id: string): void {
    setItems((prev) => ({
      ...prev,
      [id]: { quantity: prev[id]?.quantity + 1 || 1 },
    }));
  }
  function handleRemove(id: string): void {
    setItems((prev) => ({
      ...prev,
      [id]: { quantity: prev[id]?.quantity - 1 || 0 },
    }));
  }

  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {data?.map((item) => (
        <Card className="bg-transparent p-3 shadow-md" key={item.id}>
          <CardHeader className="text-xl font-medium font-mono justify-end">
            {formatPrice(item.price)}
          </CardHeader>
          <CardContent>
            <img src={item.image} alt={item.name} />
          </CardContent>
          <CardFooter className="text-lg font-medium justify-center">
            {item.name}
          </CardFooter>
          {items[item.id]?.quantity > 0 ? (
            <div className="inline-flex gap-3 items-center justify-end">
              <button className="p-2" onClick={() => handleRemove(item.id)}>
                <MinusIcon size={20} />
              </button>
              <span className="text-md font-semibold">
                {items[item.id]?.quantity}
              </span>
              <button className="p-2" onClick={() => handleAdd(item.id)}>
                <PlusIcon size={20} />
              </button>
            </div>
          ) : (
            <div className="flex justify-end ">
              <Button onClick={() => handleAdd(item.id)}>Add</Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
