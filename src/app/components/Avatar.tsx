import Image from "next/image";
import photo from "@/public/assets/photo.png";

export default function Avatar() {
  return (
    <main className='flex items-center justify-center duration-500 ease-in-out hover:scale-95'>
      <div className='absolute z-10 mr-16 flex rounded-full border border-sky-900 bg-gradient-to-b from-sky-400 to-sky-700 p-24'></div>
      <Image
        src={photo}
        alt='Foto profissional do desenvolvedor Gabriel'
        className='absolute z-20 mb-16 mr-16 w-48 rounded-full'
        priority
      />
      <div className='relative ml-16 rounded-full border border-sky-800 bg-gradient-to-br from-sky-600 to-sky-950 p-24'></div>
    </main>
  );
}
