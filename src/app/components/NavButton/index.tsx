import Link from "next/link";
import ItemList from "./ItemList";

export default function NavButtons() {
  return (
    <nav>
      <ul className='flex flex-col items-center justify-center gap-3 text-nowrap text-base text-white'>
        <Link
          href='/projects'
          className='rounded-lg outline-none focus:ring-4 focus:ring-sky-950'
        >
          <ItemList>Projetos</ItemList>
        </Link>
        <Link
          download
          href='/curriculo-gabriel.pdf'
          className='rounded-lg outline-none focus:ring-4 focus:ring-sky-950'
        >
          <ItemList>Baixar meu currículo</ItemList>
        </Link>
        <Link
          href='/experience'
          className='rounded-lg outline-none focus:ring-4 focus:ring-sky-950'
        >
          <ItemList>Experiência</ItemList>
        </Link>
      </ul>
    </nav>
  );
}
