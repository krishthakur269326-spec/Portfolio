import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiFramer,
} from "react-icons/si";


const SkillsSection = () => {

    const row1 = [
        { name: "React", icon: FaReact, color: "#58c4dc" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#00bcff" },
        { name: "Framer Motion", icon: SiFramer, color: "white" },
        { name: "Git", icon: FaGitAlt, color: "#f05133" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
        { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
        { name: "JavaScript", icon: SiJavascript, color: "yellow" },
        { name: "GitHub", icon: FaGithub, color: "white" },
        { name: "React", icon: FaReact, color: "#58c4dc" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#00bcff" },
        { name: "Framer Motion", icon: SiFramer, color: "white" },
        { name: "Git", icon: FaGitAlt, color: "#f05133" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
        { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
        { name: "JavaScript", icon: SiJavascript, color: "yellow" },
        { name: "GitHub", icon: FaGithub, color: "white" },
    ];

    const skills = [
        { name: "React", icon: FaReact, color: "#58c4dc" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#00bcff" },
        { name: "Framer Motion", icon: SiFramer, color: "white" },
        { name: "Git", icon: FaGitAlt, color: "#f05133" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
        { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
        { name: "JavaScript", icon: SiJavascript, color: "yellow" },
        { name: "GitHub", icon: FaGithub, color: "white" },
    ];
    return (
        <section id='skills' className='py-8 md:px-12 lg:px-20'>
            <div data-aos="flip-right"
                className='flex flex-col px-6'>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-gray-700"></span>
                    Expertise
                </p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
                    Tools I Work With
                </h2>
                <p className="text-gray-400 text-4 leading-relaxed mb-12">
                    A curated stack of modern technologies I use to build exceptional digital products.
                </p>
            </div>

            <div>
                {/* row1 */}
                <div className='w-full overflow-hidden py-5'>
                    <div className='flex gap-4 w-max animate-[marquee_10s_linear_infinite] hover:[animation-play-state:paused]'>
                        {row1.map((item,index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index}
                                    className="px-6 py-2 gap-4 bg-[#121212] rounded-full border border-white/10 flex 
                                            text-sm tracking-widest shadow-sm items-center justify-center text-white font-bold mx-2">
                                    {item.name} <Icon size={26} color={`${item.color}`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
                className='grid grid-cols-2 gap-6 p-6 md:grid-cols-4'>
                {
                    skills.map((skill,index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index}
                                className='text-white flex flex-col gap-3 items-center bg-[#161616] px-4 py-8 rounded-2xl border border-[#ffffff14] hover:bg-white/10 transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-[1.03]'>
                                <div><Icon size={32} color={`${skill.color}`} /></div>
                                <div>{skill.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SkillsSection