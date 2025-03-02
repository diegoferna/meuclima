"use client";

import Menu from "@/components/Menu";
import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    arquivo: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type !== "application/pdf") {
      alert("Apenas arquivos PDF são permitidos.");
      return;
    }

    setFormData((prev) => ({ ...prev, arquivo: file as File }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className=" ">
      <Menu />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Entre em Contato
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Anexar Arquivo (PDF)
              </label>
              <div className="flex items-center gap-2 border rounded-lg p-2 bg-gray-50">
                <FaPaperclip className="text-gray-500" />
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="w-full text-gray-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
