import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    isLoading: false,
    isRefreshData: false,
    setIsLoading: (data) => set((state) => ({ ...state, isLoading: data })),
    setIsRefreshData: () =>
      set((state) => ({ ...state, isRefreshData: !state.isRefreshData })),
  };
});
