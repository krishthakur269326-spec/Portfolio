import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import photo from '../assets/myimage.png';

const HeroSection = () => {
    const myInfo = { currentlybuilding: "nextjs", expericence: "4+" };
    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/krishthakur269326-spec",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/krish-thakur-7284643a3/",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://instagram.com/krish_thakur1_",
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            url: "https://x.com/Krish3167",
        },
    ];
    return (
        <section
            data-aos="fade-down"
            id="home"
            className="min-h-screen bg-[#0a0a0a] text-white flex items-center relative overflow-hidden py-26 px-6 md:px-12 lg:px-20"
        >
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div className="z-10">

                    {/* Availability badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Available for work
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                        Crafting <br />
                        digital <br />
                        <span className="text-[#606060]">Experience as</span>
                        <br />
                        <span className="text-white">
                            <Typewriter
                                words={['Developer', 'Designer', 'Freelancer']}
                                loop
                                cursor
                                typeSpeed={80}
                                deleteSpeed={50}
                            />
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-gray-400 leading-relaxed">
                        I'm Krish — a frontend developer & designer building elegant,
                        performant interfaces for forward-thinking teams.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105
                            shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] transition-all duration-300"
                        >
                            View Work ↗
                        </a>

                        <a
                            href="#contacts"
                            className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:scale-105 hover:bg-white/20 
                            shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="mt-10 flex gap-5 text-gray-400">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a key={social.name} href={`${social.url}`}><Icon className="hover:text-white transition text-3xl hover:scale-110" /></a>
                            )
                        })}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex justify-center lg:justify-end">

                    {/* Glow background */}
                    <div className="absolute w-87.5 h-87.5 bg-white/10 blur-3xl rounded-full"></div>

                    {/* Main image container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/10 blur-2xl rounded-[60px]"></div>

                        <img
                            src={photo}  // replace with your image
                            alt="hero"
                            className="relative w-[320px] md:w-105 rounded-[70%_30%_30%_70%/30%_30%_70%_70%]"
                        />

                        <div className="absolute -left-4 bottom-6 ease-in-out animate-[float_3s_infinite]
                                        bg-[rgba(22,22,22,0.9)] backdrop-blur-lg border border-[#ffffff26] rounded-full px-4 py-3 text-[12px]"
                        >
                            <div className="text-[10px] md:text-[12px] text-gray-400 tracking-wider mb-1">
                                Currently Building
                            </div>
                            <div className="flex gap-1.5 items-center">
                                <span className="text-blue-400 text-[1rem]">●</span>
                                <span className="text-[12px] md:text-[14px]">{myInfo.currentlybuilding}</span>
                            </div>
                        </div>
                        <div className="absolute -right-4 top-4 ease-in-out animate-[float_3s_1.5s_infinite]
                                        bg-[rgba(22,22,22,0.9)] backdrop-blur-lg border border-[#ffffff26] rounded-full px-4 py-3 text-[12px]"
                        >
                            <div className="text-[10px] md:text-[12px] text-gray-400 tracking-wider mb-1">
                                Experience
                            </div>
                            <div className="flex gap-1.5 items-center">
                                <span className="text-[12px] md:text-[14px]">{myInfo.expericence} Years</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* background subtle glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#ffffff10,transparent_60%)]"></div>
        </section>
    );
};

export default HeroSection;