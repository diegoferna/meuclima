"use client";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDaySunny,
  WiFog,
  WiHumidity,
  WiRain,
  WiShowers,
  WiSnow,
  WiStrongWind,
  WiThunderstorm,
} from "react-icons/wi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCloud } from "react-icons/bi";
import { JSX, useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import SearchLocation from "./SearchCep";

export default function WeatherWidget() {
  const weather = useWeatherStore((state) => state.weather);
  const loading = useWeatherStore((state) => state.loading);
  const error = useWeatherStore((state) => state.error);
  const getLocationAndFetchWeather = useWeatherStore(
    (state) => state.getLocationAndFetchWeather
  );

  useEffect(() => {
    getLocationAndFetchWeather();
  });
  if (error) return <p className="text-red-400">{error}</p>;

  const weatherIcons: Record<string, JSX.Element> = {
    Ensolarado: <WiDaySunny className="text-yellow-300" size={60} />,
    "Parcialmente nublado": <WiDayCloudy className="text-gray-300" size={60} />,
    Nublado: <WiCloud className="text-gray-400" size={60} />,
    Encoberto: <WiCloudy className="text-gray-500" size={60} />,
    "Chuva leve": <WiShowers className="text-blue-400" size={60} />,
    "Chuva forte": <WiRain className="text-blue-600" size={60} />,
    Tempestade: <WiThunderstorm className="text-purple-700" size={60} />,
    Neve: <WiSnow className="text-white" size={60} />,
    Nevoeiro: <WiFog className="text-gray-300" size={60} />,
    Neblina: <WiFog className="text-gray-400" size={60} />,
  };

  return (
    <div className="w-full max-w-4xl mx-auto md:mt-40 text-white flex flex-col items-center gap-4">
      {weather && !loading ? (
        <div className="flex flex-col items-center w-full min-h-80">
          <div className="flex justify-center">
            {weatherIcons[weather.desc] || (
              <BiCloud className="text-gray-400" size={60} />
            )}
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-6xl font-bold mt-2">{weather.temp}</h3>
            <p className="">{weather.desc}</p>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-lg">
            <li className="flex items-center col-span-2 justify-center gap-2 border-b pb-2">
              <FaMapMarkerAlt size={20} className="text-red-400" />
              <span className="font-semibold">
                {weather.city}, {weather.country}
              </span>
            </li>

            <li className="flex items-center col-span-2 md:col-span-1 gap-2 p-2 bg-white/10 rounded-lg min-w-40">
              <WiHumidity size={24} className="text-blue-300" />
              <span>
                <strong>Umidade:</strong> {weather.humidity}%
              </span>
            </li>

            <li className="flex items-center col-span-2 md:col-span-1 gap-2 p-2 bg-white/10 rounded-lg">
              <WiStrongWind size={24} className="text-gray-300" />
              <span>
                <strong>Vento:</strong> {weather.windspeedKmph} km/h
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-80">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="w-full">
        <SearchLocation />
      </div>
    </div>
  );
}
