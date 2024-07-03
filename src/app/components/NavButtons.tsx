import Link from "next/link";

export default function NavButtons() {
  return (
    <>
      <nav>
        <ul className='flex flex-col items-center justify-center gap-2 text-nowrap text-sm text-white'>
          <li className='flex h-10 w-40 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'>
            <Link href='/projects'>Projetos</Link>
          </li>
          <li className='flex h-10 w-40 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'>
            <button>Baixar meu currículo</button>
          </li>
          <li className='flex h-10 w-40 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'>
            <Link href='/experience'>Experiência</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
