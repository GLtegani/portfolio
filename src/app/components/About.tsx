import TechCard from "./TechCard";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function About() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='bg-gradient-to-b from-sky-600 to-sky-900 bg-clip-text text-center text-3xl font-bold text-transparent'>
        Desenvolvedor Full-Stack
      </h1>
      <div className='my-3 flex items-center justify-center gap-2'>
        <TechCard
          skill={<FaReact />}
          variant='react'
        />
        <TechCard
          skill={<RiNextjsFill />}
          variant='next'
        />
        <TechCard
          skill={<BiLogoTypescript />}
          variant='typescript'
        />
        <TechCard
          skill={<RiTailwindCssFill />}
          variant='tailwind'
        />
        <TechCard
          skill={<SiStyledcomponents />}
          variant='styled-components'
        />
        <TechCard
          skill={<FaJava />}
          variant='java'
        />
      </div>

      <div>
        <TechCard
          skill={<IoLogoJavascript />}
          variant='javascript'
        />
      </div>
      <h2 className='mt-2 text-center text-2xl text-sky-100'>Gabriel Tegani</h2>
      <p className='ml-8 mr-8 mt-2 bg-gradient-to-b from-sky-700 to-sky-900 bg-clip-text text-center text-base text-transparent'>
        Com experiência no desenvolvimento de sites e soluções completas para o
        seu negócio.
      </p>
    </div>
  );
}
