import React from "react";
import {ReactTyped} from "react-typed";
import { FaFacebook, FaLinkedin, FaYoutube, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import pic from "../../public/farhad.png";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-10 lg:px-20 my-10 lg:my-20"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:mt-20 space-y-4 order-2 md:order-1 text-center md:text-left">
            <span className="text-lg md:text-xl font-medium">Welcome to my Feed</span>

            <div className="flex justify-center md:justify-start items-center space-x-2 text-xl md:text-3xl lg:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-sm md:text-base lg:text-lg text-justify px-4 md:px-0">
              A dedicated junior full stack developer with a Bachelor of Science
              in Computer Science, I possess a robust foundation in computing
              and technology. My expertise spans modern technologies such as
              React.js, Node.js, Express, and MongoDB, enabling me to develop
              dynamic and responsive web applications. Proficient in utilizing
              design frameworks like Bootstrap, Tailwind, and Material-UI, I am
              committed to creating visually appealing websites that deliver
              exceptional user experiences.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
              <div className="space-y-2 text-center">
                <h1 className="font-bold text-lg">Available On</h1>
                <ul className="flex space-x-4">
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <li>
                      <FaFacebook className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/in/farhad-afridi-308b58290/" target="_blank" rel="noopener noreferrer">
                    <li>
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
                    </li>
                  </a>
                  <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <li>
                      <FaYoutube className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
                    </li>
                  </a>
                  <a href="http://www.telegram.com" target="_blank" rel="noopener noreferrer">
                    <li>
                      <FaTelegram className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
                    </li>
                  </a>
                </ul>
              </div>

             <div className="space-y-2 text-center">
  <h1 className="font-bold text-lg">Currently working On</h1>
  <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 lg:space-x-8 mt-4">
    <SiMongodb className="text-lg md:text-2xl lg:text-3xl hover:scale-110 transition duration-200 border-[2px] rounded-full p-1" />
    <SiExpress className="text-lg md:text-2xl lg:text-3xl hover:scale-110 transition duration-200 border-[2px] rounded-full p-1" />
    <FaReact className="text-lg md:text-2xl lg:text-3xl hover:scale-110 transition duration-200 border-[2px] rounded-full p-1" />
    <FaNodeJs className="text-lg md:text-2xl lg:text-3xl hover:scale-110 transition duration-200 border-[2px] rounded-full p-1" />
  </div>
</div>

            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 md:ml-8 lg:ml-20 mt-6 md:mt-0 order-1 md:order-2 flex justify-center">
            <img
              src={pic}
              className="bg-gray-100 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
              alt="Farhad"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
