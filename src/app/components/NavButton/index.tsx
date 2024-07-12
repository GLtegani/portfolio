import Link from "next/link";
import ItemList from "./ItemList";

export default function NavButtons() {
  return (
    <nav>
      <ul className='flex flex-col items-center justify-center gap-3 text-base text-white'>
        <Link
          href='/projects'
          className='relative flex h-12 w-40 items-center justify-center overflow-hidden border
            border-cyan-700 text-cyan-700 shadow-2xl transition-all duration-200
            before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0
            before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-700
            before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-700
            hover:before:h-40 hover:before:w-40 hover:before:opacity-80'
        >
          <ItemList>Projetos</ItemList>
        </Link>
        <Link
          download
          href='/curriculo-gabriel.pdf'
          className='relative flex h-12 w-40 items-center justify-center overflow-hidden border
            border-cyan-700 text-cyan-700 shadow-2xl transition-all duration-200
            before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0
            before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-700
            before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-700
            hover:before:h-40 hover:before:w-40 hover:before:opacity-80'
        >
          <ItemList>Visualizar CV</ItemList>
        </Link>
        <Link
          href='/experience'
          className='relative flex h-12 w-40 items-center justify-center overflow-hidden border
            border-cyan-700 text-cyan-700 shadow-2xl transition-all duration-200
            before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0
            before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-700
            before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-700
            hover:before:h-40 hover:before:w-40 hover:before:opacity-80'
        >
          <ItemList>Experiência</ItemList>
        </Link>
      </ul>
    </nav>
  );
}
