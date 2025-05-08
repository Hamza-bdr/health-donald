"use client";

import { useCategoryStore } from "@/lib/store/category-store";
import { cn } from "@/lib/utils";
import { Category } from "@/types/types";

export default function CategoryCard({ category }: { category: Category }) {
  const { category: cat, setCategory } = useCategoryStore();
  const isCategorySelected = cat?.name === category?.name || false;

  return (
    <div
      className={cn(
        "flex flex-col w-28 items-center rounded-md border shadow-sm hover:cursor-pointer hover:bg-slate-200 p-2",
        isCategorySelected && "bg-slate-200 shadow-inner"
      )}
    >
      <button
        className="hover:cursor-pointer hover:bg-slate-200"
        onClick={() => setCategory(category)}
      >
        <img className="size-14" src={category.imageURL} alt={category.name} />
        <h1 className="text-md font-medium text-gray-500">{category.name}</h1>
      </button>
    </div>
  );
}
