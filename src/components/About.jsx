import React from "react";
import pic from '../../public/photo.avif'


function About() {
  return (
    <div name="About Me" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-start">
        {/* Text Content */}
        <div className="md:w-2/3">
          <p className="mb-6">
            "My name is Farhad Ullah, a proud native of Peshawar. I hold a
            Bachelor of Science in Computer Science and am currently pursuing my
            passion as a junior full stack developer."
          </p>
          <h2 className="text-green-600 font-semibold text-xl">Education</h2>
          <p className="mb-6">
            "With a Bachelor of Science in Computer Science, I have gained a
            strong foundation in computing and technology. My academic journey has
            equipped me with the technical knowledge and problem-solving skills
            essential for success in the ever-evolving field of software
            development."
          </p>
          <h2 className="text-green-600 font-semibold text-xl">Skills & Expertise</h2>
          <p className="mb-6">
            "I am proficient in full stack development, with expertise in modern
            technologies such as React.js, Node.js, Express, and MongoDB. I also
            have extensive experience with design frameworks like Bootstrap,
            Tailwind, and Material-UI, allowing me to create responsive, visually
            appealing websites that deliver exceptional user experiences."
          </p>
          <h2 className="text-green-600 font-semibold text-xl">Professional Experience</h2>
          <p className="mb-6">
            "In my professional journey as a junior full stack developer, I have
            successfully contributed to various projects, applying my knowledge to
            real-world challenges and continually improving my skill set in both
            front-end and back-end development. My hands-on experience has
            prepared me to navigate the evolving tech landscape and deliver
            high-quality solutions."
          </p>
          <h2 className="text-green-600 font-semibold text-xl">Achievement & Awards</h2>
          <p className="mb-6">
            "Successfully participated in various hackathons, collaborating with
            teams to develop innovative solutions within tight deadlines,
            showcasing my problem-solving skills and ability to work effectively
            under pressure."
          </p>
          <h2 className="text-green-600 font-semibold text-xl">Mission Statement</h2>
          <p className="mb-6">
            "My mission is to leverage my skills in full stack development to
            create innovative, user-centered web applications that solve
            real-world problems. I am committed to continuous learning and growth
            in the rapidly evolving tech landscape, aiming to contribute
            positively to projects that enhance user experiences and drive
            technological advancement. Through collaboration and a passion for
            technology, I strive to make a meaningful impact in the digital
            world."
          </p>
        </div>
        
        {/* Image Content */}
        {/* <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8 flex-shrink-0"> */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 flex-shrink-0">
          <img
            src={pic}
            alt="Farhad Ullah"
            className="rounded-lg shadow-lg w-full object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
