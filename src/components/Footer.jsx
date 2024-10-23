import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6'


function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20' >
            <div className='items-center justify-center flex flex-col'>
               <div className='flex space-x-4'>
                <FaFacebook size={24} />
                <FaGithub size={24} />
                <FaLinkedin size={24} />
                <FaInstagram size={24} />
               </div>
               <div className='mt-8 border-gray-700 pt-8 flex flex-col items-center '>
                <p className='text-sm '>
                    &copy; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                  <p className='text-sm '>Lorem ipsum dolor sit amet consectetur.</p>

               </div>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer