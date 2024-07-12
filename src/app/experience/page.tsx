export default function Experience() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-6'>
      <h1 className='mb-6 text-4xl font-bold'>Experiência e Conhecimentos</h1>
      <div className='w-full max-w-xl rounded-lg p-6 shadow-md'>
        <h2 className='mb-4 text-2xl font-semibold'>Formação</h2>
        <p className='mb-4 text-lg'>
          Estudante de Engenharia de Software na <strong>Uninter</strong>
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>Tecnologias</h2>
        <ul className='mb-4 list-inside list-disc'>
          <li className='text-lg'>React</li>
          <li className='text-lg'>Next.js</li>
          <li className='text-lg'>TypeScript</li>
          <li className='text-lg'>Tailwind CSS</li>
          <li className='text-lg'>Estudando Java</li>
        </ul>
      </div>
    </div>
  );
}
