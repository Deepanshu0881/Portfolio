import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import leetcodeLogo from "../assets/leetcode.png"; 

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/deepanshu-saini-a1a42422a',
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Deepanshu0881",
        },
        {
            id: 3,
            child: (
                <>
                    LeetCode <img src={leetcodeLogo} alt="LeetCode" width={30} height={30} />
                </>
            ),
            href: "https://leetcode.com/u/DEEPANSHU0881/",
        },
        {
            id: 4,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:deepanshusaini0881@gmail.com",
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "https://drive.google.com/file/d/1hfQVm4AG_R7t14jxXVkYifrYL7FoBwyp/view?usp=sharing",
            style: "rounded-br-md",
            // download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700 ${style}`}>
                        <a href={href} className="flex justify-between items-center w-full text-green-500" target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
