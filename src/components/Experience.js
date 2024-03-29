import React from "react";
import Html from "../assets/Languages/html.png";
import Css from "../assets/Languages/css.png";
import Javascript from "../assets/Languages/javascript.png";
import React from "../assets/Languages/react.png";
import Tailwind from "../assets/Languages/tailwind.png";
import Node from "../assets/Languages/node.png";
import C from "../assets/Languages/c.png";
import Github from "../assets/Languages/github.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: React,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
        id: 6,
        src: Node,
        title: "Node",
        style: "shadow-green-500",
      },

      {
        id: 7,
        src: C,
        title: "C",
        style: "shadow-blue-600",
      },
    {
      id: 8,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-blue-950 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 md:pt-0 pt-8 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
