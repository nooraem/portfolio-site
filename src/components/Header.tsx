import Link from 'next/link';

export default function Header() {

  return (
    <>
      <header className="flex flex-row fixed top-0 right-0 z-50 w-full h-20 p-6 space-x-20 items-center md:px-10">
          <Link href="/" className="text-xl text-accent font-mono font-bold">
            Noora Issula
            <p className="text-base-content font-sans font-thin text-sm">portfolio</p>
          </Link>

          <div className="flex flex-grow flex-row space-x-2">
            <div className='h-5 w-5 rounded-full bg-base-100'></div>
            <div className='h-5 w-5 rounded-full bg-base-200'></div>
            <div className='h-5 w-5 rounded-full bg-base-300'></div>
            <div className='h-5 w-5 rounded-full bg-primary'></div>
            <div className='h-5 w-5 rounded-full bg-secondary'></div>
            <div className='h-5 w-5 rounded-full bg-accent'></div>
            <div className='h-5 w-5 rounded-full bg-info'></div>
            <div className='h-5 w-5 rounded-full bg-success'></div>
            <div className='h-5 w-5 rounded-full bg-warning'></div>
            <div className='h-5 w-5 rounded-full bg-error'></div>
          </div>
      </header>
    </>
  );
}
