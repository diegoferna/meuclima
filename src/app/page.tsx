import Menu from "@/components/Menu";
import WeatherWidget from "@/components/WeatherWidget";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-gradient-to-b from-blue-500 to-white">
      <Menu />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto p-8 gap-20">
        <div className="flex-1 flex justify-center ">
          <WeatherWidget />
        </div>

        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 leading-tight">
            Descubra o Clima <br /> na sua Região
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Consulte a previsão do tempo de forma rápida e precisa. Digite seu
            CEP e veja informações detalhadas sobre temperatura, umidade e
            condições climáticas para hoje e os próximos dias.
          </p>

          <div className="text-lg text-gray-800 flex items-center gap-2">
            <span className="text-blue-600 text-xl">•</span>
            <a
              href="/contato"
              className="text-blue-600 font-semibold hover:underline"
            >
              Entre em contato para mais informações
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
