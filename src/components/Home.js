import React from "react";
import profile from "../assets/portfolio_profile.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="name"
      className="h-screen w-full bg-gradient-to-b from-black  to-blue-950 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:pt-20  px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a skilled and passionate web developer with experience in
            creating visually appealing and user-friendly websites.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="hidden group text-white w-fit px-6 py-3 my-2 md:flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-700 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={15} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="md:hidden flex justify-around">
            <button className="text-white w-fit px-6 py-3 my-2 items-center rounded-md  bg-blue-950 cursor-pointer">
              <a href="https://www.linkedin.com/in/sudip-paladhi">
                {" "}
                <FaLinkedin size={25} />
              </a>
            </button>

            <button className="text-white w-fit px-6 py-3 my-2 items-center rounded-md  bg-blue-950 cursor-pointer">
              <a href="https://github.com/Sudip-Paladhi">
                {" "}
                <FaGithub size={25} />
              </a>
            </button>

            <button className="text-white w-fit px-6 py-3 my-2 items-center rounded-md  bg-blue-950 cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1cwy23UoQqY2TZWX2D9xj_cF2vRI0YPtH/view?usp=sharing"
                download="https://drive.google.com/file/d/1cwy23UoQqY2TZWX2D9xj_cF2vRI0YPtH/view?usp=sharing"
                target="_blank"
              rel="noreferrer"
              >
                <FaDownload size={25} />
              </a>
            </button>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl  mx-auto w-2/3 md:w-7/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
