import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full bg-gray-200 h-full md:py-14 py-5 px-2 flex justify-center items-center'>
        <div className='max-w-lg w-full p-2'>
            <h1 className='py-5 font-bold md:text-3xl text-xl text-center'>Subscribe for Exclusive Updates</h1>
            <div className="flex w-full">
            <input className='w-full border focus:outline-none focus:border-gray-400 p-2 border-gray-400 h-10' type="email" name="newsletteremail" id="newsletteremail" />
            <button className='bg-black hover:bg-slate-900 transition-all duration-300 ease-in text-white px-5'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter