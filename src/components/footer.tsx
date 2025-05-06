"use client";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="sticky bottom-0 w-full">
      <footer className="flex items-center gap-2 p-4 border-t">
        <Logo size={30} />
        <span className="text-xs text-gray-500">
          © {new Date().getFullYear()} Health Donald. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
