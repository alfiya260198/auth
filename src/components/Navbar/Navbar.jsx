import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-purple-950 p-4 text-white '>
      <div>
        <h1 className='text-3xl'>React Auth</h1>
      </div>
      <div className='flex gap-5 font-bold'>
        <Link to="/signup"  className=' px-3 py-1 items-center'>Login</Link>
        <Link to="/login" className=' px-3 py-1 items-center'>Profile</Link>
      </div>
    </div>
  )
}

export default Navbar
