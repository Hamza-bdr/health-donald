"use client";

import { categories } from "@/lib/categories";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  return (
    <div className="flex flex-col gap-2">
      {categories?.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}
