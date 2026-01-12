// store/campers.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface CamperFilters {
  location: string;
  form: string;
  transmission: string;
  AC: string;
  bathroom: string;
  kitchen: string;
  TV: string;
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
  AC: "",
  bathroom: "",
  kitchen: "",
  TV: "",
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

interface FavoritesState {
  favoriteCampers: Set<string>;
  toggleFavorite: (camperId: string) => void;
  isFavorite: (camperId: string) => boolean;  
};

interface FavoritesPersist {
  favoriteCampers: string[];
}

export const useFavoriteCampers = create<FavoritesState>()(persist<FavoritesState, [], [], FavoritesPersist>(
  (set, get) => ({
    favoriteCampers: new Set(),
    toggleFavorite: (camperId) => {
        const updatedFavorites = new Set(get().favoriteCampers);
        updatedFavorites.has(camperId) 
        ? updatedFavorites.delete(camperId) 
        : updatedFavorites.add(camperId);
        set({ favoriteCampers: updatedFavorites });
      },

    isFavorite: (camperId) => get().favoriteCampers.has(camperId)
  }),

  {
    name: "favorite-campers-storage",
    // Set → Array conversion for persistence
    partialize: (state) => ({ favoriteCampers: [...state.favoriteCampers],
    }),
    // Array → Set conversion on rehydration
    onRehydrateStorage: () => (state) => {
      if(state?.favoriteCampers) {
        state.favoriteCampers = new Set(state.favoriteCampers);
      }
    },
  }

))