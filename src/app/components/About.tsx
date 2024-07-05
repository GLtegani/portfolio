// import TechCard from "./TechCard";
// import {FaReact} from "react-icons/fa";
// import {RiNextjsFill} from "react-icons/ri";
// import {BiLogoTypescript} from "react-icons/bi";
// import {RiTailwindCssFill} from "react-icons/ri";
// import {SiStyledcomponents} from "react-icons/si";
// import {IoLogoJavascript} from "react-icons/io5";
// import {v4 as uuidv4} from "uuid";
import Link from "next/link";
import {ubuntu} from "../fonts";
// import javaIcon from "@/public/assets/java.png";
// import Image from "next/image";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";

export default function About() {
  // const techs = [
  //   <FaReact key={uuidv4()} />,
  //   <RiNextjsFill key={uuidv4()} />,
  //   <BiLogoTypescript key={uuidv4()} />,
  //   <RiTailwindCssFill key={uuidv4()} />,
  //   <SiStyledcomponents key={uuidv4()} />,
  //   <IoLogoJavascript key={uuidv4()} />,
  // ];

  return (
    <div>
      <h1 className='animate-fade-right text-center text-4xl font-bold'>
        <span
          className={`animate-text bg-gradient-to-tr from-blue-300 via-blue-800 to-blue-300
            bg-clip-text text-transparent`}
        >
          Desenvolvedor
        </span>
      </h1>
      <h2 className='animate-fade-right text-center text-4xl font-bold'>
        <span
          className='animate-textReverse bg-gradient-to-tr from-blue-300 via-blue-800 to-blue-300
            bg-clip-text text-transparent'
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
              className='text-3xl'
              href='https://www.github.com/GLtegani'
              target='_blank'
            >
              <FaGithub />
            </Link>
          </li>
          <li className='transition duration-300 ease-in-out hover:scale-110'>
            <Link
              className='text-3xl text-sky-700'
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

        {/* {techs.map((tech) => (
              <TechCard
                key={uuidv4()}
                skill={tech}
              />
            ))}
            <TechCard>
              <Image
                src={javaIcon}
                alt='Java icon'
                width={100}
                height={100}
              />
            </TechCard> */}
      </nav>
      <p
        className={`mx-4 mt-3 animate-fade-left bg-gradient-to-b from-blue-800 to-blue-950
          bg-clip-text text-center text-xl text-transparent animate-normal
          animate-fill-forwards animate-ease-in-out`}
      >
        Com experiência no desenvolvimento de sites e soluções completas para o
        seu negócio.
      </p>
    </div>
  );
}
