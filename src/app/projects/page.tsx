import Card from "./components/Card";

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <header className='mb-3'>
        <h1 className='text-3xl font-bold text-white'>Meus projetos</h1>
      </header>
      <Card content='true' />
      <Card content='false' />
    </div>
  );
}
