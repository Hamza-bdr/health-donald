"use client";
import Logo from "../app/Logo";

export default function Footer() {
  return (
    <footer className="flex items-center gap-2 p-4 border-t">
      <Logo size={30} />
      <span className="text-xs text-gray-500">
        © {new Date().getFullYear()} Health Donald. All rights reserved.
      </span>
    </footer>
  );
}
