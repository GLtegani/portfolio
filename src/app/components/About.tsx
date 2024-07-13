import Link from "next/link";
import {firaMono, ubuntu} from "../fonts";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";

export default function About() {
  return (
    <div>
      <h1
        className='animate-fade-right bg-custom-gradient-text bg-clip-text text-center text-4xl
          font-bold text-transparent'
      >
        <span className={"animate-text"}>Desenvolvedor</span>
      </h1>
      <h2 className='animate-fade-right text-center text-4xl font-bold'>
        <span
          className={`${firaMono.className} bg-gradient-to-r from-blue-500 to-green-500`}
        >
          Full-Stack
        </span>
      </h2>
      <h2
        className={`mt-3 animate-fade-left ${ubuntu.className} text-center text-3xl font-semibold
          text-sky-100`}
      >
        &lt;Gabriel Tegani &frasl;&gt;
      </h2>
      <nav className='mt-3 flex animate-fade items-center justify-center animate-duration-[2200ms]'>
        <ul className='flex flex-row gap-3'>
          <li className='transition duration-300 ease-in-out hover:scale-110'>
            <Link
              className='text-3xl outline-8 outline-offset-2 outline-sky-800'
              href='https://www.github.com/GLtegani'
              target='_blank'
            >
              <FaGithub />
            </Link>
          </li>
          <li className='transition duration-300 ease-in-out hover:scale-110'>
            <Link
              className='text-3xl text-sky-700 outline-8 outline-offset-2 outline-sky-800'
              href='https://www.linkedin.com/in/gabriel-tegani'
              target='_blank'
            >
              <FaLinkedin />
            </Link>
          </li>
          {/* <li className='transition duration-300 ease-in-out hover:scale-110'>
            <Link
              className='text-3xl text-red-600'
              href='https://www.github.com/GLtegani'
              target='_blank'
            >
              <BiLogoGmail />
            </Link>
          </li> */}
        </ul>
      </nav>
      <div
        className={`mx-4 mt-3 animate-fade-left text-center text-xl animate-normal
          animate-fill-forwards animate-ease-in-out`}
      >
        <p>
          Com experiência no desenvolvimento de sites e soluções completas para
          o seu negócio.
        </p>
        <p>Conhecimentos em:</p>
        <p className='font-bold'>
          React.js, Next.js, Typescript, Tailwind CSS, Styled-components, Java
        </p>
      </div>
    </div>
  );
}
