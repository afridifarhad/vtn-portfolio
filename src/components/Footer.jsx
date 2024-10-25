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
                <a href="http://www.facebook.com" target='_blank'>
                
                <FaFacebook size={24} />
                </a>
                <a href="https://github.com/afridifarhad?tab=repositories" target='_blank'>
                
                <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/farhad-afridi-308b58290/" target='_blank'>
                <FaLinkedin size={24} />
                
                </a>
                <a href="http://www.instagram.com" target='_blank'>
                
                <FaInstagram size={24} />
                </a>
               </div>
               <div className='mt-8 border-gray-700 pt-8 flex flex-col items-center '>
                <p className='text-sm '>
                    &copy; 2024 Full stack Developer. All rights reserved.
                </p>
                  <p className='text-sm '>afridifarhad@gmail.com</p>

               </div>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer