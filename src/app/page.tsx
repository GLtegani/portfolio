import About from "./components/About";
import Avatar from "./components/Avatar";
import NavButtons from "./components/NavButtons";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <header className='mt-6 animate-fade-down animate-normal animate-fill-forwards animate-ease-in-out'>
        <Avatar />
      </header>

      <main>
        <About />
      </main>

      <footer className='mb-6 animate-fade-up'>
        <NavButtons />
      </footer>
    </div>
  );
}
