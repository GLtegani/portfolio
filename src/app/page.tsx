import About from "./components/About";
import Avatar from "./components/Avatar";
import NavButtons from "./components/NavButtons";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <header>
        <Avatar />
      </header>

      <main>
        <About />
      </main>

      <footer>
        <NavButtons />
      </footer>
    </div>
  );
}
