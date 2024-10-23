import React from "react";
import { ReactTyped } from "react-typed";
import { FaSquareFacebook,  } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import pic from '../../public/photo.avif'




function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome to my Feed</span>

            <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1> 
             {/* <span className="text-red-700 font-bold">Developer</span> */}

             <ReactTyped className="text-red-700 font-bold"

          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magnam est fugiat, similique ipsa iure delectus iste
              necessitatibus voluptatibus fuga nesciunt omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magnam est fugiat, similique ipsa iure delectus iste
              necessitatibus voluptatibus fuga nesciunt omnis?
            </p>
            <br />
            {/* social media icons */}
          <div className="flex justify-between">

          <div className="space-y-2">
                <h1 className="font-bold">Avalible On</h1>
                <ul className="flex space-x-5">
                    <li>
                    <FaSquareFacebook  className="text-2xl cursor-pointer" />
                    </li>
                    <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </li>
                    <li>

                    <FaYoutube className="text-2xl cursor-pointer" />
                    </li>
                    <li>
                    <FaTelegram className="text-2xl cursor-pointer" />
                    </li>
                </ul>

            </div>

            <div className="space-y-2">

            <h1 className="font-bold">Currently working On</h1>
               <div className="flex space-x-5">
               <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
               <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
               <FaReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
               <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />

               </div>
            </div>
          </div>


          </div>

          {/* img */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
          <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
