import { create } from "zustand";
import { Weather } from "@/types/weather";

const WEATHER_API_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

interface WeatherStore {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (lat: number, lon: number) => Promise<void>;
  getLocationAndFetchWeather: () => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  weather: null,
  loading: true,
  error: null,

  fetchWeather: async (lat, lon) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `${WEATHER_API_URL}/${lat},${lon}?format=j1&lang=pt`
      );
      if (!res.ok) throw new Error("Erro ao buscar o clima");

      const data = await res.json();
      set({
        weather: {
          temp: `${data.current_condition[0].temp_C}°C`,
          humidity: `${data.current_condition[0].humidity}%`,
          windspeedKmph: `${data.current_condition[0].windspeedKmph} km/h`,
          city: data.nearest_area[0].areaName[0].value,
          country: data.nearest_area[0].country[0].value,
          desc: data.current_condition[0].lang_pt[0].value,
        },
        loading: false,
      });
    } catch (error) {
      console.log(error);
      set({ error: "Erro ao obter o clima", loading: false });
    }
  },

  getLocationAndFetchWeather: () => {
    if (typeof window === "undefined") return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        useWeatherStore
          .getState()
          .fetchWeather(coords.latitude, coords.longitude);
      },
      () => set({ error: "Permissão de localização negada", loading: false })
    );
  },
}));
