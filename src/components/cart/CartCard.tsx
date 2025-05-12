"use client";
import { formatPrice } from "@/lib/format-price";
import { Item } from "@/types/types";
import CartButton from "./CartButton";
import { Button } from "../ui/button";
import { EditIcon, Trash2 } from "lucide-react";
import { useAdminStore } from "@/lib/store/admin-store";
import { useUserStore } from "@/lib/store/user-store";

export default function CartCard({ item }: { item: Item }) {
  const AdminEdit = useAdminStore((s) => s.adminEdit);
  const isAdmin = useUserStore((s) => s.isAdmin);

  return (
    <div
      className="flex flex-col justify-between items-center bg-transparent p-4 gap-2 rounded-md shadow-md border"
      key={item.id}
    >
      <p className="text-xl font-medium font-mono justify-end">
        {formatPrice(item.price)}
      </p>
      <img className="size-40" src={item.image} alt={item.name} />
      <p className="flex flex-col text-lg font-medium justify-center">
        {item.name}
      </p>
      <CartButton item={item} />
      {AdminEdit && isAdmin && (
        <div className="gap-2">
          <Button size={"icon"} variant="outline">
            <EditIcon />
          </Button>
          <Button size={"icon"} variant="outline">
            <Trash2 />
          </Button>
        </div>
      )}
    </div>
  );
}
