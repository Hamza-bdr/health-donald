"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = null | string;

type UserStore = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
  isAdmin: boolean;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      isAdmin: false,
      login: (user) => {
        set({ user, isAdmin: user === "admin" });
      },
      logout: () => {
        set({ user: null, isAdmin: false });
      },
    }),

    {
      name: "user-storage",
    }
  )
);
