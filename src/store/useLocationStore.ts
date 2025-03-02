import { create } from "zustand";

interface LocationStore {
  city: string | null;
  lat: number | null;
  lon: number | null;
  setLocation: (city: string, lat: number, lon: number) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  city: null,
  lat: null,
  lon: null,
  setLocation: (city, lat, lon) => set({ city, lat, lon }),
}));
