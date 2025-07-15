import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-purple-950 p-4 text-white '>
      <div>
        <h1 className='text-3xl'>React Auth</h1>
      </div>
      <div className='flex gap-5 font-bold'>
        <a href='/login' className=' px-3 py-1 items-center'>Login</a>
        <a href='/profile' className=' px-3 py-1 items-center'>Profile</a>
        <a href='/logout' className='border border-2 border-white px-3 py-1 items-center'>Logout</a>
      </div>
    </div>
  )
}

export default Navbar
