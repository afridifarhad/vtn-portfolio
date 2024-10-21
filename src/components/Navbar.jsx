import React, { useState } from 'react'
import pic from '../../public/photo.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";



function Navbar() {
    const [menu, setMenu] = useState(false)
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto px-4 md:px:20 shadow-md h-16' >
    <div className='flex justify-between h-16 items-center'>
        <div className='flex'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>Farha<span className='text-green-500 text-2xl' >d</span>
             <p className='text-sm'>Web developer</p>
             </h1>

        </div>
        {/* desktop navbar */}
        <div>
            <ul className='hidden md:flex space-x-8'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Experience</li>
                <li>Contacts</li>


            </ul>
            <div className='md:hidden' onClick={() => setMenu(!menu)}>

            {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
           

            </div>
        </div>
    </div>
    
    {/* mobile navbar */}
    {menu && (
    <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-4 font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Experience</li>
                <li>Contacts</li>
    </ul>

    )}
    
    
  </div>
  </>
  )
}

export default Navbar