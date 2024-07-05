import {FaReact} from "react-icons/fa";
import {BiLogoTypescript} from "react-icons/bi";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiStyledcomponents} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";
import {ReactNode} from "react";

interface TechCardProps {
  skill?: {
    type:
      | typeof FaReact
      | typeof RiNextjsFill
      | typeof BiLogoTypescript
      | typeof RiTailwindCssFill
      | typeof SiStyledcomponents
      | typeof IoLogoJavascript;
  };
  children?: ReactNode;
}

export default function TechCard({skill, children}: TechCardProps) {
  if (skill) {
    return (
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 p-1 text-2xl
          transition duration-300 ease-in-out hover:scale-125 ${ skill.type ===
          IoLogoJavascript && "text-yellow-500" } ${ skill.type === FaReact &&
          "text-sky-400" } ${skill.type === BiLogoTypescript && "text-sky-700"} ${
          skill.type === RiTailwindCssFill && "text-sky-400" } ${skill.type ===
          SiStyledcomponents && "text-pink-500"} `}
      >
        {skill as ReactNode}
      </div>
    );
  } else {
    return (
      <div
        className={`flex w-9 items-center justify-center rounded-lg bg-sky-50 p-1 transition
          duration-300 ease-in-out hover:scale-125`}
      >
        {children}
      </div>
    );
  }
}
