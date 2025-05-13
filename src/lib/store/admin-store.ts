"use client";
import { AdminStore } from "@/types/types";
import { create } from "zustand";

export const useAdminStore = create<AdminStore>((set) => ({
  adminEdit: false,
  toggleAdminEdit: () => {
    set((p) => ({ adminEdit: !p.adminEdit }));
  },
}));
