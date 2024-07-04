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
        className={`${poppins.className} animate-bg bg-gradient-to-br from-blue-900 via-blue-200 to-blue-900`}>
        {children}
      </body>
    </html>
  );
}
