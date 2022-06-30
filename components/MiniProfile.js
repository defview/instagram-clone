import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src={session?.user?.image} 
        alt=''
        className='rounded-full border p-[2px] w-16 h-16'
        />

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <div 
        onClick={signOut}
        className='text-blue-500 px-2 py-1 hover:bg-white 
        hover:text-blue-500 transition duration-700 ease-in-out
        hover:border-transparent hover:rounded-xl hover:shadow-blue-400'>
            <button>Sign Out</button>
        </div>
    </div>
    
  )
}

export default MiniProfile