import { create } from "zustand";
import { Sort } from "../types/sort";

type DateSortStore = {
  dateSort: Sort;
  setDateSort: (order: Sort) => void;
  reset: () => void;
};

const useDateSortStore = create<DateSortStore>((set) => ({
  dateSort: "asc",
  setDateSort: (dateSort) => set({ dateSort }),
  reset: () => set({ dateSort: "asc" }),
}));

export default useDateSortStore;
