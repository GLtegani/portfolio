import Image from "next/image";
import photo from "../assets/photo.png";

export default function Avatar() {
  return (
    <main className='flex items-center justify-center'>
      <div className='absolute z-10 mr-16 flex h-40 w-40 rounded-full border border-sky-900 bg-gradient-to-b from-sky-400 to-sky-700'></div>
      <Image
        src={photo}
        alt='Foto profissional do desenvolvedor Gabriel'
        className='absolute z-20 mb-20 mr-16 w-44 rounded-full'
        priority
      />
      <div className='relative ml-16 h-40 w-40 rounded-full border border-sky-800 bg-gradient-to-br from-sky-600 to-sky-950'></div>
    </main>
  );
}
