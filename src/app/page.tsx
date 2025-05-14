"use client";

import { CartFooter } from "@/components/cart/CartFooter";
import CategoryList from "@/components/category/CategoryList";
import CartList from "@/components/cart/CartList";
// import { useUserStore } from "@/lib/store/user-store";
// import { useRouter } from "next/navigation";
// import Login from "./login/page";
export default function HomePage() {
  // const user = useUserStore((state) => state.user);

  // if (user === "") {
  //   return <Login />;
  // }

  return (
    <div className="flex h-full">
      <CategoryList />
      <div className="flex flex-col gap-2 p-2 w-full overflow-y-auto">
        <CartList />
        <CartFooter />
      </div>
    </div>
  );
}
