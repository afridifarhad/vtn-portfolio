import React from 'react'
import html from '../../public/html.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import javascript from '../../public/javascript.png'
import oracle from '../../public/oracle.png'
import spring from '../../public/spring.png'
import springBoot from '../../public/springBoot.jpg'
 




function Projects() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "Html"
        },
        {
            id: 2,
            logo: css,
            name: "css"
        },
        {
            id: 3,
            logo: java,
            name: "java"
        },
        {
            id: 4,
            logo: javascript,
            name: "javascript"
        },
        {
            id: 5,
            logo: oracle,
            name: "oracle"
        },
         {
            id: 6,
            logo: spring,
            name: "spring"
        },
        {
            id: 7,
            logo: springBoot,
            name: "springBoot"
        }

    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Projects</h1>
                    <p className=' '>I have create a projects in below Technologies</p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 '>
                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div key={id} className='flex flex-col items-center justify-center  border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' >
                                    <img src={logo} className='w-[150px] rounded-full' alt="" />
                                    <div>
                                        <div className=''>{name}</div>
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

export default Projects;