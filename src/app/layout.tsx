import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fullstack - Gabriel",
  description: "Portfólio do Desenvolvedor Fullstack Gabriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
