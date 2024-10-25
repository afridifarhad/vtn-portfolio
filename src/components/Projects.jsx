import React from 'react';
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import java from '../../public/java.png';
import javascript from '../../public/javascript.png';
import oracle from '../../public/oracle.png';
import spring from '../../public/spring.png';
import springBoot from '../../public/springBoot.jpg';

function Projects() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: java,
            name: "Java"
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 5,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 6,
            logo: spring,
            name: "Spring"
        },
        {
            id: 7,
            logo: springBoot,
            name: "Spring Boot"
        }
    ];

    return (
        <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-5'>Projects</h1>
            <p className=''>I have created projects in the following technologies:</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-3'>
                {
                    cardItem.map(({ id, logo, name }) => (
                        <div key={id} className='flex flex-col items-center justify-center border-2 rounded-full p-4 cursor-pointer hover:scale-105 transition-transform duration-300'>
                            <img src={logo} className='w-24 rounded-full' alt={name} />
                            <div className='text-center mt-2'>{name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;
