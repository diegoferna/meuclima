import { useState } from "react";
import { useLocationStore } from "@/store/useLocationStore";
import { useWeatherStore } from "@/store/useWeatherStore";

const CEP_API_URL = process.env.NEXT_PUBLIC_CEP_API_URL;

export default function SearchLocation() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { name: string; lat: number; lon: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const { setLocation } = useLocationStore();
  const { fetchWeather } = useWeatherStore();

  const fetchLocations = async (value: string) => {
    if (!value) return setSuggestions([]);

    setLoading(true);
    try {
      const response = await fetch(
        `${CEP_API_URL}${encodeURIComponent(
          value
        )}&count=3&language=pt&format=json`
      );
      const data = await response.json();
      if (data.results) {
        setSuggestions(
          data.results.map((place: any) => ({
            name: `${place.name}, ${place.admin1 || place.country}`,
            lat: place.latitude,
            lon: place.longitude,
          }))
        );
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Erro ao buscar localizações:", error);
      setSuggestions([]);
    }
    setLoading(false);
  };

  const handleSelect = (place: { name: string; lat: number; lon: number }) => {
    setQuery(place.name);
    setSuggestions([]);
    setLocation(place.name, place.lat, place.lon);
    fetchWeather(place.lat, place.lon);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          fetchLocations(e.target.value);
        }}
        placeholder="Digite um local..."
        className="w-full border p-2 rounded-md text-gray-900"
      />

      {loading && <p className="text-gray-500 text-sm">Carregando...</p>}

      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border mt-1 rounded-md shadow-md max-h-60 overflow-y-auto z-50">
          {suggestions.map((place, index) => (
            <li
              key={index}
              onClick={() => handleSelect(place)}
              className="p-2 font-bold text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              {place.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
