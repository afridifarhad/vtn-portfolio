import React from 'react'
import mongoDB from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import reactjs from '../../public/reactjs.png'
import nodejs from '../../public/node.png'
 import firebase from '../../public/firebase.jpg'




function Skills() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDb"
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

    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Skills</h1>
                    <span className=' underline font-semibold '>Featured Projects</span>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5 '>
                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div key={id} className='md:w-[300px] md:h-[320px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' >
                                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                                    <div>
                                        <div className='px-2 font-bold text-xl mb-2 '>{name}</div>
                                        <p className='px-2 text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, labore?    </p>
                                    </div>
                                    <div className='px-6 py-4 space-x-3 justify-around '>
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded '>Video</button>
                                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-3 rounded '>Source Code</button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills