import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import leetcodeLogo from "../assets/leetcode-2.png"; 
const Contact = ()=>{
    return (
        <div name="contact" className="w-full h-screen bg-black p-4 text-white pt-64 pb-32">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-green-600">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex  justify-center items-center">
                    <form action="https://getform.io/f/anlexrra" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 border-green-600 rounded-md text-white focus:outline-none"
                        required />
                        <input type="text" name="email" placeholder="Enter your email" className=" my-4 p-2 bg-transparent border-2 border-green-600 rounded-md text-white focus:outline-none"
                        required />
                        <textarea name="message" 
                        placeholder="Enter your message" rows="6" className="p-2 bg-transparent border-2 border-green-600 rounded-md text-white focus:outline-none"
                        required></textarea>

                        <button className="text-white bg-gradient-to-b from-green-400 via-green-600 to-green-400 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Let's talk</button>
                    </form>
                </div>
                <div className="">
                    <ul className="lg:hidden flex flex-row justify-center items-center p-8 ">
                        <li className="px-4 hover:text-green-600"><a href="https://www.linkedin.com/in/deepanshu-saini-a1a42422a"><FaLinkedin size={30} /></a></li>
                        <li className="px-4 hover:text-green-600"><a href="https://github.com/Deepanshu0881"><FaGithub size={30} /></a></li>
                        <li className="px-4 hover:text-green-600"><a href="mailto:deepanshusaini0881@gmail.com"><HiOutlineMail size={30} /></a></li>
                        <li className="px-4 hover:text-green-600"><a href="https://drive.google.com/file/d/1hfQVm4AG_R7t14jxXVkYifrYL7FoBwyp/view?usp=sharing"><img src={leetcodeLogo} alt="LeetCode" width={30} height={30} /></a></li>
                        <li className="px-4 hover:text-green-600"><a href="https://drive.google.com/file/d/1hfQVm4AG_R7t14jxXVkYifrYL7FoBwyp/view?usp=sharing"><BsFillPersonLinesFill size={30} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact