import React from 'react'
import Story from './Story';
import { useSession } from 'next-auth/react';

const stories = [
  {
      id: '121',
      username: 'N Scott',
      img: 'http://cdn.onlinewebfonts.com/svg/img_312847.png',
  },
  {
      id: '123',
      username: 'Savanah',
      img: 'https://i.pinimg.com/236x/f3/71/c3/f371c31d0a9d5fc19627a23aa6fb113b.jpg',
  },
  {
      id: '122',
      username: 'Abby',
      img: 'https://i.pinimg.com/236x/d5/1a/57/d51a57e4c46b58d9a0baabc5a8c5accb.jpg',
  },
  {
      id: '124',
      username: 'BNXN',
      img: 'https://i.pinimg.com/236x/9d/da/61/9dda61d16c55717426e8741bf7a0f4bf.jpg',
  },
  {
      id: '125',
      username: 'Saldana',
      img: 'https://i.pinimg.com/236x/7f/14/19/7f14193d5435fe2a4b3b9a3a2feb3b57.jpg',
  },
  {
      id: '126',
      username: 'Naomi',
      img: 'https://i.pinimg.com/236x/0d/55/5b/0d555b808f4d9ddb008efd869ebc1b8a.jpg',
  },
  {
      id: '127',
      username: ' Curtis',
      img: 'https://i.pinimg.com/236x/86/60/be/8660bea826e697f6bce147a08e9ca7a8.jpg',
  },
  {
      id: '128',
      username: 'Stacey',
      img: 'https://i.pinimg.com/236x/3f/5d/15/3f5d1509e3fc1bbeec2edee10728e408.jpg',
  },
  {
      id: '129',
      username: 'Hendrixx',
      img: 'https://i.pinimg.com/236x/ec/b0/c1/ecb0c1129bf78c8d9ea27cd5d8d6b6c7.jpg',
  },
  {
      id: '130',
      username: 'Jones',
      img: 'https://i.pinimg.com/236x/63/82/8f/63828f7fb47d77df554f73d8bb2e8fa9.jpg',
  },
  {
      id: '131',
      username: 'Campbell',
      img: 'https://i.pinimg.com/236x/04/c7/91/04c791a842df1aa09169052cac474407.jpg',
  },
  {
      id: '132',
      username: 'Baldwin',
      img: 'https://i.pinimg.com/236x/f4/10/3c/f4103c8095ee5aa862e28ff8e36140ed.jpg',
  },
  {
      id: '133',
      username: 'Panther',
      img: 'https://i.pinimg.com/236x/b7/41/9e/b7419ec5501ae2448e5452d0ec1d06cb.jpg',
  },
  {
      id: '134',
      username: 'HB Studios',
      img: 'https://i.pinimg.com/236x/29/a7/0e/29a70ed9ffb09b9b339a9adf380c283b.jpg',
  },
  {
      id: '135',
      username: 'Aaliyah',
      img: 'https://i.pinimg.com/236x/63/fc/eb/63fceb69f0dcf74b6a365123c53a8ea1.jpg',
  },
  {
      id: '136',
      username: 'GM Gaming',
      img: 'https://i.pinimg.com/236x/45/8a/12/458a12f341cec9c8dc9ed7fef851bcf6.jpg',
  },
  {
      id: '137',
      username: 'Imani',
      img: 'https://i.pinimg.com/236x/53/f9/c1/53f9c1ec40f3272dbd173687a74a01fc.jpg',
  },
  {
      id: '138',
      username: 'Patricia',
      img: 'https://i.pinimg.com/236x/d2/8a/5d/d28a5de4a42a193e19bc1910ecc4ae99.jpg',
  },
];

function Stories() {
    const { data: session } = useSession();

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border
    rounded-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-purple-500'>
        {session && (
            <Story
            img={session.user.image}
            username={session.user.username}
            />
        )}
      {stories.map((stori) => (
        <Story 
          key={stori.id}
          id={stori.id}
          username={stori.username}
          img={stori.img}
        />
      ))}
    </div>
  )
}

export default Stories