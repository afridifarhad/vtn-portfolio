import React, { useState } from 'react'
import pic from '../../public/photo.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About Me" },
        { id: 3, text: "Skills" },
        { id: 4, text: "Projects" },
        { id: 5, text: "Contact" }
    ];

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-10 lg:px-20 shadow-md h-16 fixed left-0 right-0 top-0 z-50 bg-white'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='flex items-center space-x-3'>
                        <img src={pic} className='h-10 w-10 rounded-full' alt="profile" />
                        <div>
                            <h1 className='font-semibold text-lg lg:text-xl cursor-pointer'>
                                Farha<span className='text-red-700'>d</span>
                            </h1>
                            <p className='text-xs lg:text-sm'>Web Developer</p>
                        </div>
                    </div>
                    {/* Desktop Navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-6 lg:space-x-8'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='md:hidden' onClick={() => setMenu(!menu)}>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {menu && (
                    <div className='bg-white absolute top-16 left-0 right-0'>
                        <ul className='flex flex-col items-center space-y-6 text-lg py-8'>
                            {navItems.map(({ id, text }) => (
                                <li key={id} className='hover:scale-105 duration-200 cursor-pointer font-semibold'>
                                    <Link
                                        onClick={() => setMenu(false)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
