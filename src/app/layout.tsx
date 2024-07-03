import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Gabriel",
  description: "Portfólio do Desenvolvedor Fullstack Gabriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={`${poppins.className} h-full bg-gradient-to-b from-sky-200 to-sky-400 bg-cover bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
