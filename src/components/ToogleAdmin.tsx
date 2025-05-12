"use client";
import { useUserStore } from "@/lib/store/user-store";
import { Toggle } from "./ui/toggle";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useAdminStore } from "@/lib/store/admin-store";

export default function ToogleAdmin() {
  const isAdmin = useUserStore((s) => s.isAdmin);
  const { adminEdit, setAdminEdit } = useAdminStore();
  const router = useRouter();
  return (
    isAdmin && (
      <div className="absolute bottom-0 right-0 gap-4 border-2 p-3 rounded-sm">
        <div className="flex gap-4 ">
          <Button onClick={() => router.push("/items/new")}>New</Button>
          <Toggle
            variant="outline"
            onClick={() => {
              setAdminEdit(!adminEdit);
            }}
          >
            Admin
          </Toggle>
        </div>
      </div>
    )
  );
}
