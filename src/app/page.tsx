import About from "./components/About";
import Avatar from "./components/Avatar";
import ClaimFooter from "./components/ClaimFooter";
import NavButtons from "./components/NavButton";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <header className='animate-duration-2500 animate-fade border border-black p-16 ease-in-out'>
        <Avatar />
      </header>

      <main>
        <About />
        <div className='mt-6 animate-fade-up'>
          <NavButtons />
        </div>
      </main>

      <footer className='mb-3 mt-12 animate-fade-left'>
        <ClaimFooter />
      </footer>
    </div>
  );
}
