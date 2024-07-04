import { FaJava, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { ReactNode } from "react";

interface TechCardProps {
  skill: {
    type:
      | typeof FaReact
      | typeof RiNextjsFill
      | typeof BiLogoTypescript
      | typeof RiTailwindCssFill
      | typeof SiStyledcomponents
      | typeof FaJava
      | typeof IoLogoJavascript;
  };
}

export default function TechCard({ skill }: TechCardProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-sky-50 p-1 transition duration-300 ease-in-out hover:scale-125 ${skill.type === IoLogoJavascript && "text-yellow-500"} text-2xl ${skill.type === FaReact && "text-sky-400"} ${skill.type === BiLogoTypescript && "text-sky-700"} ${skill.type === RiTailwindCssFill && "text-sky-400"} ${skill.type === SiStyledcomponents && "text-pink-500"} `}>
      {skill as ReactNode}
    </div>
  );
}
