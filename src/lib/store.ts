"use client";
import { create } from "zustand";

type User = string;

type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: localStorage.getItem("user") || "",
  setUser: (user) =>
    set(() => {
      localStorage.setItem("user", user);
      return { user }; // Update the state with the new user
    }),
}));
