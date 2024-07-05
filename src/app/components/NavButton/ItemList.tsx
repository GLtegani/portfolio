import {ReactNode} from "react";

export default function ItemList({children}: {children: ReactNode}) {
  return (
    <li
      className='flex h-11 w-48 cursor-pointer items-center justify-center rounded-full
        bg-gradient-to-b from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'
    >
      {children}
    </li>
  );
}
