import type {Metadata} from "next";
import {poppins} from "./fonts";
import "./globals.css";
import Link from "next/link";

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
        className={`${poppins.className} h-screen animate-bg bg-gradient-to-br from-blue-900
          via-blue-200 to-blue-900 bg-cover bg-no-repeat`}
      >
        <h1
          className='mx-auto mb-8 mt-4 w-24 animate-fade-down cursor-pointer text-center text-3xl
            font-bold text-white animate-duration-1000'
        >
          <Link href='/'>&lt;GL &frasl;&gt;</Link>
        </h1>
        {children}
      </body>
    </html>
  );
}
