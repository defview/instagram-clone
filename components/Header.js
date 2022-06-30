import Image from 'next/image'
import React from 'react'
import {
    searchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    SearchIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

  return (    
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            {/* Left */}
            <div
            onClick={() => router.push('/')} 
            className='relative hidden lg:inline-grid w-[170px] cursor-pointer'>
                <Image 
                src="/pngegg.png" 
                layout="fill"
                objectFit='contain'
                />
            </div>
            <div
            onClick={() => router.push('/')} 
            className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                <Image 
                src="/ig.png"
                layout='fill'
                objectFit="contain"
                />
            </div>
            {/* Middle - Search input field */}
            <div className='max-w-xs'>
            <div className='relative mt-1 p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center
                pointer-events-none'>
                    <SearchIcon className='h-5 w-5 text-gray-500' />
                </div>
                <input 
                type="text" 
                placeholder="search"
                className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
                focus:ring-black focus:border-black transition duration-700 ease-in-out
                rounded-md'/>
            </div>
            </div>
            {/* Right */}
            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon onClick={() => router.push('/')} className='navBtn'/>
                <MenuIcon className='h-6 md:hidden cursor-pointer'/>
            
            {session ? (
                <>
                <div className='relative navBtn'>
                    <PaperAirplaneIcon className='navBtn rotate-45'/>
                    <div className='absolute -top-2 -right-3 text-xs w-5
                    h-5 bg-red-500 rounded-full flex items-center justify-center
                    animate-pulse text-white'>2</div>
                </div>
                <PlusCircleIcon 
                onClick={() => setOpen(true)} 
                className='navBtn'/>
                <UserGroupIcon className='navBtn'/>
                <HeartIcon className='navBtn'/>

                <img 
                onClick={signOut}
                src={session.user.image}
                alt='profile pic'
                className='h-10 w-10 rounded-full cursor-pointer'
                />
                </>
            ) : (
                <div className='px-2 py-1 hover:bg-gray-100 
                hover:text-blue-500 transition duration-700 ease-in-out
                hover:border-transparent hover:rounded-xl'>
                    <button onClick={signIn}>Sign In</button>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Header