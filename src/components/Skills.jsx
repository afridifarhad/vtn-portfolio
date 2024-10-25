import React from 'react';
import mongoDB from '../../public/mongodb.jpg';
import express from '../../public/express.png';
import reactjs from '../../public/reactjs.png';
import nodejs from '../../public/node.png';
import firebase from '../../public/firebase.jpg';

function Skills() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: reactjs,
            name: "ReactJS"
        },
        {
            id: 4,
            logo: nodejs,
            name: "NodeJS"
        },
        {
            id: 5,
            logo: firebase,
            name: "Firebase Database"
        }
    ];

    return (
        <div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <h1 className='text-3xl font-bold mb-5'>Skills</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5'>
                {
                    cardItem.map(({ id, logo, name }) => (
                        <div key={id} className='w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300'>
                            <img src={logo} className='w-24 h-24 p-2 rounded-full border-2 mx-auto' alt={name} />
                            <div className='text-center'>
                                <div className='font-bold text-xl mb-2'>{name}</div>
                                <p className='text-gray-700'>Tools for building dynamic, scalable web applications with interactive interfaces.</p>
                            </div>
                            <div className='flex justify-around px-6 py-4'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Visit</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;
