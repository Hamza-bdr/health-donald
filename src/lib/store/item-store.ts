"use client";
import { CartItems, Item } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ItemStore = {
  cartItems: CartItems;
  setCartItems: (cartItems: CartItems) => void;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};
export const useItemStore = create(
  persist<ItemStore>(
    (set) => ({
      cartItems: {},
      setCartItems: (cartItems) => {
        set({ cartItems });
      },
      addItem: (item: Item) => {
        set((state) => {
          const itemId = item.id;
          if (!state.cartItems[itemId]) {
            state.cartItems[itemId] = { quantity: 1, item };
          } else {
            state.cartItems[itemId] = {
              quantity: state.cartItems[itemId]?.quantity + 1,
              item,
            };
          }
          return {
            cartItems: { ...state.cartItems },
          };
        });
      },
      removeItem: (item: Item) => {
        set((state) => {
          const itemId = item.id;
          if (state.cartItems[itemId].quantity > 1) {
            state.cartItems[itemId] = {
              quantity: state.cartItems[itemId].quantity - 1,
              item,
            };
          } else {
            delete state.cartItems[itemId];
          }
          return {
            cartItems: { ...state.cartItems },
          };
        });
      },
    }),
    {
      name: "item-storage",
    }
  )
);

export const useCartQuantity = () => {
  return useItemStore((s) => {
    return Object.values(s.cartItems as CartItems).reduce(
      (acc: number, value: { quantity: number }) => acc + value.quantity,
      0
    );
  });
};

export const useCartPrice = () => {
  return useItemStore((s) => {
    return Object.values(s.cartItems as CartItems).reduce(
      (acc: number, value: { quantity: number; item: Item }) =>
        acc + value.quantity * value.item.price,
      0
    );
  });
};
