// store/campers.ts
import { Camper } from "@/lib/api";
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

  // page?: number;
  // limit?: number;
  // items: Camper[]
};

interface CamperStore {
  draftFilters: CamperFilters;
  appliedFilters: CamperFilters;
  setDraftFilters: (filters: Partial<CamperFilters>) => void;
  applyFilters: () => void;

  page: number;
  limit: number;
  items: Camper[];
  total: number;
  incrementPage: () => void;
  resetItems: () => void;
  appendItems: (newItems: Camper[], total: number) => void;
};

const defaultFilters: CamperFilters = {
  location: "",
  form: "",
  transmission: "",
  AC: "",
  bathroom: "",
  kitchen: "",
  TV: "",
  // page: 1,
  // limit: 3,
  // items: []
}

export const useCampersFilters = create<CamperStore>((set, get) => ({

  page: 1,
  limit: 2,
  items: [],
  total: 0,

  incrementPage: () => 
    set((state) => ({ page: state.page + 1 })),
  resetItems: () => 
    set({ items: [], page: 1 , total: 0}),
  appendItems: (newItems, total) => 
    // set((state) => ({ items: [...state.items, ...newItems], total: state.total + newItems.length })),
  set((state) => ({ items: [...state.items, ...newItems], total })),

draftFilters: defaultFilters,
appliedFilters: defaultFilters,

setDraftFilters: (filters) => 
  set((state) => ({
  draftFilters: { ...state.draftFilters, ...filters },
})),

  applyFilters: () =>
  set((state) => ({
    appliedFilters: { ...state.draftFilters },
    items: [],        // ← очищаємо картки
    page: 1,          // ← повертаємо на першу сторінку
    total: 0,         // ← скидаємо total
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