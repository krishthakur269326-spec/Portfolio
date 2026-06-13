import React from "react";

const AboutSection = () => {
    const stats = [
        {
            value: "4+",
            label: "Years Experience",
            desc: "Frontend & UI Design",
        },
        {
            value: "48+",
            label: "Projects Completed",
            desc: "",
        },
        {
            value: "30+",
            label: "Happy Clients",
            desc: "",
        },
        {
            value: "Nepal",
            label: "Kathmandu",
            desc: "",
            dot: true,
        },
    ];

    return (
        <section
            id="about"
            className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] before:bg-size-[60px_60px]">

            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE */}
                <div data-aos="fade-right">
                    <p className="text-sm tracking-[0.3em] text-gray-400 uppercase flex items-center gap-3">
                        <span className="w-10 h-px bg-gray-600"></span>
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
                        Turning ideas into <br />
                        pixel-perfect reality
                    </h2>

                    <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
                        <p>
                            I'm <span className="text-white font-semibold">Krish Thakur</span>, a frontend developer
                            with over 4 years of experience building beautiful,
                            performant web applications. I specialize in creating
                            seamless user experiences with a keen eye for design.
                        </p>

                        <p>
                            I believe every pixel matters, every interaction should feel natural,
                            and performance is a feature.
                        </p>

                        <p>
                            When I'm not coding, I'm exploring new design systems,
                            contributing or experimenting with generative art
                            and creative coding.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div data-aos="fade-left"
                    className="grid sm:grid-cols-2 gap-6 my-auto">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#101010] border border-white/10 rounded-2xl p-6 hover:bg-[#161616] transition"
                        >
                            {item.dot && (
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                                        Location
                                    </span>
                                </div>
                            )}

                            <h3 className="text-3xl font-bold">
                                {item.value}
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                                {item.label}
                            </p>

                            {item.desc && (
                                <p className="text-gray-500 text-xs mt-2">
                                    {item.desc}
                                </p>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default AboutSection;