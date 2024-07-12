import Image from "next/image";
import photo from "@/public/assets/photo.png";

export default function Avatar() {
  return (
    <div className='flex items-center justify-center duration-500 ease-in-out hover:scale-95'>
      <div
        className='absolute z-10 mr-16 flex rounded-full border border-sky-900 bg-custom-bg-avatar
          p-24'
      ></div>
      <Image
        src={photo}
        alt='Foto profissional do desenvolvedor Gabriel'
        className='absolute z-20 mr-16 mt-6 w-48 rounded-full'
        priority
      />
      <div className='relative ml-16 rounded-full bg-custom-bg-avatar-2 p-24'></div>
    </div>
  );
}
