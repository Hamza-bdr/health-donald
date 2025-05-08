"use client";
import { UserStore } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
