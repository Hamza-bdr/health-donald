"use client";
import { useCartPrice, useItemStore } from "@/lib/store/item-store";
import { formatPrice } from "../../lib/format-price";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CartLine } from "./CartLine";

export function CartFooter() {
  const totalPrice = useCartPrice();
  const { cartItems, removeItem } = useItemStore();
  const [open, setOpen] = useState(false);

  function handleCollapse() {
    if (totalPrice >= 0) setOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 px-4 py-2 bg-slate-100 rounded-t-lg ">
        <button className="m-auto" onClick={handleCollapse}>
          {open ? <ChevronDown /> : <ChevronUp />}
        </button>
        {open && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-medium">Cart</h1>
              <p className="text-lg font-medium"> {formatPrice(totalPrice)} </p>
            </div>
            <div className="h-60 overflow-auto px-2">
              {Object.values(cartItems).map((cartItem) => (
                <CartLine
                  cartItem={cartItem}
                  removeItem={() => removeItem(cartItem.item)}
                  key={cartItem.item.id}
                />
              ))}
            </div>
          </>
        )}

        <div className="inline-flex items-center gap-4">
          <Button className="flex-grow">Checkout</Button>
          {!open && (
            <h1 className="text-lg font-medium"> {formatPrice(totalPrice)} </h1>
          )}
        </div>
      </div>
    </div>
  );
}
