"use client";

import { create } from "zustand";

type User = string;

type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: "",
  setUser: (user) => set({ user }),
}));
