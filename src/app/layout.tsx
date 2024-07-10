import type {Metadata} from "next";
import {poppins} from "./fonts";
import "./globals.css";
import Link from "next/link";
import ClaimFooter from "./components/ClaimFooter";

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
        className={`${poppins.className} h-full animate-bg bg-gradient-to-br from-blue-900
          via-blue-200 to-blue-900 bg-cover bg-no-repeat`}
      >
        <h1
          className='mx-auto mb-8 mt-4 w-24 animate-fade-down cursor-pointer text-center text-3xl
            font-bold text-white animate-duration-1000'
        >
          <Link
            href='/'
            className='focus:rounded-full focus:outline-none focus:ring focus:ring-sky-800'
          >
            &lt;GL &frasl;&gt;
          </Link>
        </h1>
        {children}
        <footer className='mb-3 mt-12 animate-fade-left text-center'>
          <ClaimFooter />
        </footer>
      </body>
    </html>
  );
}
