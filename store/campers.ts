// store/campers.ts
import { create } from "zustand";
import { Camper, getCampers } from "@/lib/api";

type CamperStore = {
  campers: Camper[];
  filtered: Camper[];
  isLoaded: boolean;
  load: () => Promise<void>;
  filterByForm: (form?: string) => void;
};

export const useCamperStore = create<CamperStore>((set, get) => ({
  campers: [],
  filtered: [],
    isLoaded: false,

  load: async () => {
    if (get().isLoaded) return;
     
    const response = await getCampers();
    const items = response.items;
    set({ 
        campers: items, 
        filtered: items, 
        isLoaded: true 
    });
    
  },

  filterByForm: (form) => {
    const all = get().campers;

    if (!form || form === "all") {
      set({ filtered: all });
      return;
    }

    set({
      filtered: all.filter((c) => c.form === form),
    });
  },
}));