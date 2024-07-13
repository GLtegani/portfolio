import type {Metadata} from "next";
import {quicksand, poppins} from "./fonts";
import "./globals.css";
import Link from "next/link";
import ClaimFooter from "./components/ClaimFooter";
import {CiLight, CiDark} from "react-icons/ci";

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
        className={`${poppins.className} h-full bg-custom-gradient bg-cover bg-no-repeat`}
      >
        <header
          className={`mx-auto ${quicksand.className} mb-8 mt-4 flex animate-fade-down items-center
            justify-center gap-8 text-white animate-duration-1000`}
        >
          <h1 className='text-3xl'>
            <Link
              href='/'
              className='focus:rounded-full focus:outline-none focus:ring focus:ring-sky-800'
            >
              &lt;GL &frasl;&gt;
            </Link>
          </h1>

          <button className='rounded-full border border-white p-1 text-2xl hover:bg-white hover:text-black'>
            <CiDark />
          </button>
        </header>
        {children}
        <footer className='mb-3 mt-12 animate-fade-left text-center'>
          <ClaimFooter />
        </footer>
      </body>
    </html>
  );
}
