import Image from "next/image";
import comingSoon from "@/public/assets/COOMING-SOON-IMAGE.png";
import {BiLogoTypescript} from "react-icons/bi";
import {FaGithub, FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiStyledcomponents} from "react-icons/si";
import {v4 as uuidv4} from "uuid";
import javaIcon from "@/public/assets/java.png";

import TechCard from "@/app/components/TechCard";
import Link from "next/link";

interface CardProps {
  content: "true" | "false";
}

export default function Card({content}: CardProps) {
  if (content === "true") {
    const techs = [
      <FaReact key={uuidv4()} />,
      <RiNextjsFill key={uuidv4()} />,
      <BiLogoTypescript key={uuidv4()} />,
      <RiTailwindCssFill key={uuidv4()} />,
      <SiStyledcomponents key={uuidv4()} />,
      <IoLogoJavascript key={uuidv4()} />,
    ];
    return (
      <div
        className='mx-4 flex w-72 cursor-pointer flex-col items-center justify-center rounded-xl
          border-4 border-sky-800 duration-500 hover:scale-95'
      >
        <div className='w-full rounded-t-xl border-b-2 border-sky-800'>
          <Image
            src={comingSoon}
            alt='image'
            priority
            className='w-full rounded-t-xl'
          />
        </div>

        <div className='w-full rounded-b-xl bg-amber-400'>
          <div>
            <p className='ml-2 mt-3 text-base text-white'>
              Tecnologias utilizadas:
            </p>
            <div className='mx-2 mt-2 flex flex-wrap items-center justify-center gap-2 text-lg'>
              {techs.map((tech) => (
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
                  priority
                />
              </TechCard>
            </div>
          </div>

          <div className='mb-2 mt-3 flex items-center justify-between'>
            <div className='ml-2 flex flex-col text-left'>
              <h2 className='text-2xl font-bold text-white'>Coming Soon</h2>
              <span className='text-xs text-gray-500'>
                (Clique para mais detalhes)
              </span>
            </div>
            <Link
              className='mr-2 text-3xl outline-8 outline-offset-2 outline-sky-800'
              href='https://www.github.com/GLtegani'
              target='_blank'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='mx-4 flex w-72 cursor-pointer flex-col items-center justify-center rounded-xl
          border-4 border-sky-800 duration-500 hover:scale-95'
      >
        <div className='w-full rounded-t-xl border-b-2 border-sky-800'>
          <Image
            src={comingSoon}
            alt='comingSoon Image'
            priority
            className='w-full rounded-t-xl'
          />
        </div>

        <div className='w-full rounded-b-xl bg-amber-400'>
          <div className='mb-2 mt-3'>
            <h2 className='text-center text-3xl font-bold text-white'>
              Mais um projeto está por vir...
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
