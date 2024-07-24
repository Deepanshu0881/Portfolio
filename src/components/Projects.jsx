import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rodeezCart from "../assets/portfolio/rodeez_cart.png";
import tictactoeGame from "../assets/portfolio/tictactoe_game.png";
import weatherApp from "../assets/portfolio/weather_app.png";
import stopwatch from "../assets/portfolio/stopwatch.png";
import calculatorApp from "../assets/portfolio/calculator.png";
import simonGame from "../assets/portfolio/simon_game.png";
import amazonClone from "../assets/portfolio/amazon_clone.png";
import diceGame from "../assets/portfolio/dice_game.png";
import drumKit from "../assets/portfolio/drum_kit.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: rodeezCart,
            name: "RoDeez Cart",
            tech: "React, Node, Express, MongoDB",
            date: "July 2024",
            demoLink: "https://ro-deez-frontend.onrender.com/",
            codeLink: "https://github.com/Deepanshu0881/RoDeez_Cart"
        },
        {
            id: 2,
            src: tictactoeGame,
            name: "TicTacToe Game",
            tech: "HTML, CSS, JavaScript",
            date: "Jan 2024",
            demoLink: "https://deepanshu0881.github.io/TicTacToe/",
            codeLink: "https://github.com/Deepanshu0881/TicTacToe"
        },
        {
            id: 3,
            src: weatherApp,
            name: "Weather App",
            tech: "HTML, CSS, JavaScript",
            date: "Jan 2024",
            demoLink: "https://deepanshu0881.github.io/Weather_app/",
            codeLink: "https://github.com/Deepanshu0881/Weather_app"
        },
        {
            id: 4,
            src: stopwatch,
            name: "Stopwatch",
            tech: "HTML, CSS",
            date: "Dec 2023",
            demoLink: "https://deepanshu0881.github.io/StopWatch/",
            codeLink: "https://github.com/Deepanshu0881/StopWatch"
        },
        {
            id: 5,
            src: simonGame,
            name: "Simon Game",
            tech: "HTML, CSS, JavaScript",
            date: "June 2023",
            demoLink: "https://deepanshu0881.github.io/Simon_game/",
            codeLink: "https://github.com/Deepanshu0881/Simon_game"
        },
        {
            id: 6,
            src: amazonClone,
            name: "Amazon Clone",
            tech: "HTML, CSS",
            date: "Jun 2023",
            demoLink: "https://deepanshu0881.github.io/Project_amazon/",
            codeLink: "https://github.com/Deepanshu0881/Project_amazon"
        },
        {
            id: 7,
            src: diceGame,
            name: "Dice Game",
            tech: "HTML, CSS, JavaScript",
            date: "Jun 2023",
            demoLink: "https://deepanshu0881.github.io/Dice_Game/",
            codeLink: "https://github.com/Deepanshu0881/Dice_Game"
        },
        {
            id: 8,
            src: drumKit,
            name: "DrumKit",
            tech: "HTML, CSS, JavaScript",
            date: "Jun 2023",
            demoLink: "https://deepanshu0881.github.io/Drum-Kit/",
            codeLink: "https://github.com/Deepanshu0881/Drum-Kit"
        },
        {
            id: 9,
            src: calculatorApp,
            name: "Calculator App",
            tech: "HTML, CSS",
            date: "Jul 2023",
            demoLink: "https://deepanshu0881.github.io/Calculator/",
            codeLink: "https://github.com/Deepanshu0881/Calculator"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div name="projects" className="bg-black text-white min-h-screen flex justify-center items-center pt-20 md:pt-0">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-green-500">Projects</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <Slider {...settings} className="custom-slider ">
                    {projects.map(({ id, src, name, tech, date, demoLink, codeLink }) => (
                        <div key={id} className="p-4">
                            <div className="relative group shadow-md shadow-green-600 rounded-lg duration-200 hover:scale-105 ">
                                <div className="relative group">
                                    <img src={src} alt={name} className="rounded-md duration-200 group-hover:blur-sm" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-center duration-200">
                                        <p className="text-xl font-bold text-white">{name}</p>
                                        <p className="text-sm text-white">{tech}</p>
                                        <p className="text-sm text-white">{date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center text-white mt-4">
                                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center cursor-pointer">Demo</a>
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center cursor-pointer">Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <style jsx>{`
                    .slick-prev,
                    .slick-next {
                        width: 30px;
                        height: 80px;
                        background-color: #374151;
                        border-radius: 10%;
                        z-index: 9;
                    }
                    .slick-prev:hover,
                    .slick-next:hover {
                        background-color: green;
                        border-radius: 10%;
                    }
                    .slick-prev {
                        left: 10px;
                    }
                    .slick-next {
                        right: 10px;
                    }
                    .slick-dots li button:before {
                        color: white;
                    }
                    .slick-dots li.slick-active button:before {
                        color: white;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Projects;
