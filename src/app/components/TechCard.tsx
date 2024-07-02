import { ReactNode } from "react";

interface TechCardProps {
  skill: ReactNode;
  variant:
    | "react"
    | "next"
    | "tailwind"
    | "typescript"
    | "styled-components"
    | "java"
    | "javascript";
}

export default function TechCard({ skill, variant }: TechCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg bg-sky-50 p-1 ${variant === "javascript" && "text-yellow-500"} text-2xl ${variant === "react" && "text-sky-400"} ${variant === "typescript" && "text-sky-700"} ${variant === "tailwind" && "text-sky-400"} ${variant === "styled-components" && "text-pink-500"} `}>
      {skill}
    </div>
  );
}
