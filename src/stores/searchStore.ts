import { create } from "zustand";

export type Search = {
  search: string;
  setSearch: (search: string) => void;
  reset: () => void;
};

const useSearchStore = create<Search>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  reset: () => set({ search: "" }),
}));

export default useSearchStore;
