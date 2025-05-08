import { Category, CategoryStore } from "@/types/types";
import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useCategoryStore = create(
  persist<CategoryStore>(
    (set) => ({
      category: { name: "", imageURL: "" },
      setCategory: (category: Category) => {
        set({ category });
      },
    }),
    {
      name: "category-storage",
    }
  )
);
