import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = ()=>{
    return (
        <div name = "home" className="h-screen w-full bg-black pt-32 md:pt-0 ">
            <div className="max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-4 py-8 md:flex-row ">
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white ">
                        I'm a Full Stack Developer
                    </h2>
                    <p className=" text-gray-200 py-4 max-w-md">
                        I am a full stack web developer and building sofwares for people.
                        Currently, I love to work on web application using technologies like React,Tailwind, Node Js, Express Js, MongoDB.
                    </p>
                    <div>
                        <Link to="projects" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-600 hover:scale-105 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                            
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <img src={HeroImage} alt="my profile pic" className="rounded-2xl mx-auto  w-60 md:w-60" />
                </div>
            </div>
        </div>
    )
};

export default Home;



