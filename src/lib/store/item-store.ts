"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Item = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};
type itemsType = {
  [id: string]: { quantity: number; item: Item };
};
type ItemStore = {
  cartItems: itemsType;
  setCartItems: (cartItems: itemsType) => void;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  totalQuantity: (cartItems: itemsType) => number;
};
export const useItemStore = create(
  persist<ItemStore>(
    (set) => ({
      cartItems: {},
      setCartItems: (cartItems) => {
        set({ cartItems });
      },
      addItem: (item: Item) => {
        set((state) => ({
          cartItems: {
            ...state.cartItems,
            [item.id]: {
              quantity: state.cartItems[item.id]?.quantity + 1 || 0,
              item,
            },
          },
        }));
      },
      removeItem: (item: Item) => {
        set((state) => ({
          cartItems: {
            ...state.cartItems,
            [item.id]: {
              quantity: state.cartItems[item.id]?.quantity - 1 || 0,
              item,
            },
          },
        }));
      },
      totalQuantity: (cartItems) =>
        Object.values(cartItems as itemsType).reduce(
          (acc: number, value: { quantity: number }) => acc + value.quantity,
          0
        ),
    }),
    {
      name: "item-storage",
    }
  )
);

export const useCartQuantity = () => {
  return useItemStore((s) => {
    return Object.values(s.cartItems as itemsType).reduce(
      (acc: number, value: { quantity: number }) => acc + value.quantity,
      0
    );
  });
};
