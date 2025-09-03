import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
        <a className='text-xs font-bold' href="">SKINSTRIC</a>
        <p className='text-gray-500'>[intro]</p>
        <div>
            <button className='bg-black text-[#fff] p-4'>Enter Code</button>
        </div>
    </div>
  )
}

export default Navbar