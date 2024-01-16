import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-blue-900 to-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" md:mt-6 mt-28 text-4xl text-white font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl text-white md:mt-16 mt-6">
          Hello, I'm Sudip Paladhi, a passionate and creative Frontend
          Developer! dedicated to creating engaging and innovative web
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          specialize in crafting scalable applications with React. I thrive in
          collaborative environments and am always eager to contribute my skills
          to dynamic projects.
        </p>
        <br />
        <p className="text-xl text-white hidden">
          During my journey as a frontend developer, I have honed my
          problem-solving abilities and developed a knack for turning challenges
          into opportunities for growth. My curiosity and enthusiasm drive me to
          continuously improve and explore new possibilities within the
          ever-evolving landscape of web development.
        </p>
        <p className="text-xl text-white">
          {" "}
          Let's connect and explore the endless possibilities of web development
          together. Whether you have a project in mind or just want to chat
          about the latest tech trends, I'm always open to new opportunities and
          collaborations.
        </p>
      </div>
    </div>
  );
};

export default About;
