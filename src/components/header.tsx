"use client";
import Logo from "../app/Logo";
import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center gap-2 px-4 py-2 border-b">
      <Logo size={40} />
      <div className="ml-auto">
        <Button size="sm" variant="outline">
          <ShoppingBasket size={12} />
        </Button>
      </div>
    </header>
  );
}
