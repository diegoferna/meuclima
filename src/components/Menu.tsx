import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl font-bold">Meu Clima</h1>
      <ul className="flex gap-6 mt-2 md:mt-0">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>

        <li>
          <Link href="/contato" className="hover:text-gray-300">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
