import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex gap-96 bg-gray-50'>
      <div><MdKeyboardArrowLeft className='text-4xl' /></div>
      <div className='font-bold text-2xl'>Swap Source</div>
    </div>
  )
}

export default Navbar
