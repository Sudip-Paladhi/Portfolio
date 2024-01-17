import React from "react";
import FoodApp from "../assets/Food_App.png";
import Netflix from "../assets/Netflix.png";
import Youtube from "../assets/Youtube.png";
import Amazon from "../assets/Amazon.png";
import UsabilityHub from "../assets/UsabilityHub.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: FoodApp,
      demo: "https://tasty-bites-food.netlify.app/",
      code: "https://github.com/Sudip-Paladhi/Foodie-App",
    },

    {
      id: 2,
      src: Netflix,
      demo: "https://netflix-gpt3.netlify.app/",
      code: "https://github.com/Sudip-Paladhi/NetflixGPT",
    },

    {
      id: 3,
      src: Youtube,
      demo: "https://you-tube-wheat.vercel.app/",
      code: "https://github.com/Sudip-Paladhi/YouTube",
    },

    // {
    //   id: 4,
    //   src: Amazon,
    //   demo: "https://sudip-paladhi.github.io/Amazon_Clone/",
    //   code: "https://github.com/Sudip-Paladhi/Amazon_Clone",
    // },

    // {
    //   id: 5,
    //   src: UsabilityHub,
    //   demo: "https://sudip-paladhi.github.io/Clone-of-UsabilityHub/",
    //   code: "https://github.com/Sudip-Paladhi/Clone-of-UsabilityHub",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
