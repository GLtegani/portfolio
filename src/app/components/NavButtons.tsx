import Link from "next/link";

export default function NavButtons() {
  return (
    <>
      <nav>
        <ul className='flex flex-col items-center justify-center gap-3 text-nowrap text-base text-white'>
          <li className='flex h-11 w-48 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'>
            <Link href='/projects'>Projetos</Link>
          </li>
          <li className='flex h-11 w-48 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'>
            <Link
              download
              href='/curriculo-gabriel.pdf'>
              <button>Baixar meu currículo</button>
            </Link>
          </li>
          <li className='flex h-11 w-48 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'>
            <Link href='/experience'>Experiência</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
