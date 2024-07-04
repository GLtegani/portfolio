import TechCard from "./TechCard";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

export default function About() {
  const techs = [
    <FaReact key={uuidv4()} />,
    <RiNextjsFill key={uuidv4()} />,
    <BiLogoTypescript key={uuidv4()} />,
    <RiTailwindCssFill key={uuidv4()} />,
    <SiStyledcomponents key={uuidv4()} />,
    <FaJava key={uuidv4()} />,
    <IoLogoJavascript key={uuidv4()} />,
  ];

  return (
    <div>
      <h1 className='animate-fade-right text-center text-4xl font-bold'>
        <span className='animate-text bg-gradient-to-tr from-blue-300 via-blue-800 to-blue-300 bg-clip-text text-transparent'>
          Desenvolvedor
        </span>
      </h1>
      <h2 className='animate-fade-right text-center text-4xl font-bold'>
        <span className='animate-textReverse bg-gradient-to-tr from-blue-300 via-blue-800 to-blue-300 bg-clip-text text-transparent'>
          Full-Stack
        </span>
      </h2>
      <h2 className='mt-3 animate-fade-left text-center text-3xl font-semibold text-sky-100'>
        Gabriel Tegani
      </h2>
      <p className='mx-4 mt-3 animate-fade-left bg-gradient-to-b from-blue-800 to-blue-950 bg-clip-text text-center text-xl text-transparent animate-normal animate-fill-forwards animate-ease-in-out'>
        Com experiência no desenvolvimento de sites e soluções completas para o
        seu negócio.
      </p>
      <div className='mt-3 flex animate-fade items-center justify-center gap-2 animate-duration-[2200ms]'>
        {techs.map((tech) => (
          <TechCard
            key={uuidv4()}
            skill={tech}
          />
        ))}
      </div>
    </div>
  );
}
