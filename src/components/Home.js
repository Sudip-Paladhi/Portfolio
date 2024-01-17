import React from "react";
import profile from "../assets/portfolio_profile.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="name"
      className="h-screen w-full bg-gradient-to-b from-black  to-blue-900 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            corporis eius minus fuga ex quibusdam est, id officia voluptate
            libero?
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-700 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={15} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-7/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
