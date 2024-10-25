import React from "react";
import { ReactTyped } from "react-typed";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import pic from "../../public/farhad.png";


function Home() {
  return (
    <>
      <div
     
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome to my Feed</span>

            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              A dedicated junior full stack developer with a Bachelor of Science
              in Computer Science, I possess a robust foundation in computing
              and technology. My expertise spans modern technologies such as
              React.js, Node.js, Express, and MongoDB, enabling me to develop
              dynamic and responsive web applications. Proficient in utilizing
              design frameworks like Bootstrap, Tailwind, and Material-UI, I am
              committed to creating visually appealing websites that deliver
              exceptional user experiences.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Avalible On</h1>
                <ul className="flex space-x-5">
                  <a href="http://www.facebook.com" target="_blank">
                    <li>
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/in/farhad-afridi-308b58290/" target="_blank">
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  
                  </a>
                  <a href="http://www.youtube.com" target="_blank">
                  <li>
                    <FaYoutube className="text-2xl cursor-pointer" />
                  </li>
                  
                  </a>
                  <a href="http://www.telegram.com" target="_blank">
                  <li>
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </li>
                  
                  </a>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">Currently working On</h1>
                <div className="  flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          {/* img */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className=" bg-gray-100 rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
