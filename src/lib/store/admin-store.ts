"use client";
import { AdminStore } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAdminStore = create(
  persist<AdminStore>(
    (set) => ({
      adminEdit: false,
      setAdminEdit: (adminEdit: boolean) => set({adminEdit}),
    }),
    {
      name: "admin-storage",
    }
  )
);
