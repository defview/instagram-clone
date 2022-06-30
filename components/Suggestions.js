import React from 'react'

const suggest = [
  {
    id: '121',
    username: 'HB Studios',
    img: 'https://i.pinimg.com/236x/29/a7/0e/29a70ed9ffb09b9b339a9adf380c283b.jpg',
    company: 'HB studios'
  },
  {
    id: '122',
    username: 'Aaliyah',
    img: 'https://i.pinimg.com/236x/63/fc/eb/63fceb69f0dcf74b6a365123c53a8ea1.jpg',
    company: 'Seattle General Hospital'
  },
  {
    id: '123',
    username: 'GM Gaming',
    img: 'https://i.pinimg.com/236x/45/8a/12/458a12f341cec9c8dc9ed7fef851bcf6.jpg',
    company: 'GM Gaming Inc'
  },
  {
    id: '124',
    username: 'Imani',
    img: 'https://i.pinimg.com/236x/53/f9/c1/53f9c1ec40f3272dbd173687a74a01fc.jpg',
    company: 'Alphabet Inc'
  },
  {
    id: '125',
    username: 'Patricia',
    img: 'https://i.pinimg.com/236x/d2/8a/5d/d28a5de4a42a193e19bc1910ecc4ae99.jpg',
    company: 'Stellar Branding Inc'
  },
]

function Suggestions() {

  return (
    <div className='mt-4 ml-11'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>

      {suggest.map((sug) => (
        <div 
          key={sug.id}
          className='flex items-center justify-between mt-3'>
          <img 
          className='w-10 h-10 rounded-full border p-[2px]' 
          src={sug.img} 
          alt="" 
          />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{sug.username}</h2>
            <h3 className='text-xs text-gray-400'>Works at {sug.company}</h3>
          </div>
          <div className='border rounded-lg bg-blue-500 text-white px-3 py-0
          hover:border-blue-500 hover:bg-white hover:text-blue-500 transition
          duration-700 ease-in-out'>
            <button>Follow</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Suggestions