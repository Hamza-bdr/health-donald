import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getId(name: string) {
  if (!name) return;
  return name.replace(" ", "-").toLocaleLowerCase() + "-" + nanoid(4);
}
