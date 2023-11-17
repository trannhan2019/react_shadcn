import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      //   setIsLoggedIn: (data) => set((state) => ({ ...state, isLoggedIn: data })),
      setIsLoggedIn: (data) => set({ user: data, isLoggedIn: true }),
      setIsLoggedOut: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: "sba-storage",
    }
  )
);
