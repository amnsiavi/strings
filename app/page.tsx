import Link from 'next/link';
import { MainHeading, MainLink } from '@/components/MainPageComponents';
import { ROUTES } from '@/Routes';
export default function Home() {
  return (
    <main className=" min-h-screen bg-black flex items-center justify-center">
      <div className='flex flex-col gap-2 max-w-xs w-full bg-slate-800 items-center justify-center p-5 rounded-lg'>

        <MainHeading />


        <div className='w-full flex flex-col gap-7 p-2'>
          <MainLink href={ROUTES.signin} text='Sign In' />
          <MainLink href={ROUTES.singup} text='Sign Up' />
        </div>
      </div>

    </main>
  )
}
