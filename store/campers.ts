// store/campers.ts
import { create } from "zustand";
import { Camper, getCampers } from "@/lib/api";

interface CamperFilters {
  location: string;
  form: string | null;
  transmission: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
};
interface CamperStore {
  // campers: Camper[];
  // filtered: Camper[];
  draftFilters: CamperFilters;
  appliedFilters: CamperFilters;
  setDraftFilters: (filters: Partial<CamperFilters>) => void;
  applyFilters: () => void;
  // isLoaded: boolean;
};

const defaultFilters: CamperFilters = {
  location: "",
  form: "",
  transmission: "",
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
}

export const useCampersFilters = create<CamperStore>((set, get) => ({
draftFilters: defaultFilters,
appliedFilters: defaultFilters,

setDraftFilters: (filters) => 
  set((state) => ({
  draftFilters: { ...state.draftFilters, ...filters },
})),

  applyFilters: () => 
    set((state) => ({
      appliedFilters: { ...state.draftFilters },
    })),
}));