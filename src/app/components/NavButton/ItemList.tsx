import {ReactNode} from "react";

export default function ItemList({children}: {children: ReactNode}) {
  return <li className='relative z-10'>{children}</li>;
}
