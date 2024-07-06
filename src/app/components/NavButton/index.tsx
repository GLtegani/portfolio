import Link from "next/link";
import ItemList from "./ItemList";

export default function NavButtons() {
  return (
    <nav>
      <ul className='flex flex-col items-center justify-center gap-3 text-nowrap text-base text-white'>
        <ItemList>
          <Link href='/projects'>Projetos</Link>
        </ItemList>
        <ItemList>
          <Link
            download
            href='/curriculo-gabriel.pdf'
          >
            <button>Baixar meu currículo</button>
          </Link>
        </ItemList>
        <ItemList>
          <Link href='/experience'>Experiência</Link>
        </ItemList>
      </ul>
    </nav>
  );
}
