import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Previsão do Tempo - ClimaCEP",
  description:
    "Confira a previsão do tempo precisa e atualizada para sua região.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`h-screen w-screen min-h-screen min-w-96 `}>
        {children}
      </body>
    </html>
  );
}
