"use client";
import { formatPrice } from "@/lib/format-price";
import { Item } from "@/types/types";
import CartButton from "./CartButton";
import { Button, buttonVariants } from "../ui/button";
import { EditIcon, Trash2 } from "lucide-react";
import { useAdminStore } from "@/lib/store/admin-store";
import { useUserStore } from "@/lib/store/user-store";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { db } from "@/lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";

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
          <AdminEditButton item={item} />
          <AdminDeleteButton item={item} />
        </div>
      )}
    </div>
  );
}
import { getStorage, ref, deleteObject } from "firebase/storage";
import { useSWRConfig } from "swr";
import { useCategoryStore } from "@/lib/store/category-store";

export function AdminDeleteButton({ item }: { item: Item }) {
  const { mutate } = useSWRConfig();
  const categoryName = useCategoryStore().category.name;

  async function handleAdminDelete(item: Item) {
    const storage = getStorage();
    const imageRef = ref(storage, item.image);
    try {
      await deleteDoc(doc(db, "items", item.id));
      await deleteObject(imageRef);
      alert("Item deleted successfully!");
      mutate(`/items/${categoryName}`);
    } catch (error) {
      console.error("Error deleting item or image:", error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} variant="outline">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={async () => handleAdminDelete(item)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function AdminEditButton({ item }: { item: Item }) {
  return (
    <Link
      className={buttonVariants({ size: "icon", variant: "outline" })}
      href={`/items/${item.id}`}
    >
      <EditIcon />
    </Link>
  );
}
