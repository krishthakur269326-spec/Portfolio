import React from 'react';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contacts', href: '#contacts' }
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-screen z-100 transition-all duration-300 ${scrolled
            ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
            }`}>
            <nav className="px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white">
                    Krish.
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="relative text-gray-300 hover:text-white transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href={`${import.meta.env.BASE_URL}krish-cv.pdf`}
                    download
                    className='hidden md:block px-6 py-3 cursor-pointer rounded-full bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black transition'>
                    Download CV
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/90 h-screen transition-opacity duration-300 md:hidden ${isOpen
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                    }`}
            />

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 backdrop-blur-lg left-0 h-screen w-72 bg-[#0B0B0B] border-r border-white/10 transform transition-transform duration-300 ease-in-out md:hidden z-100 ${isOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">
                        Menu
                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <ul className="flex flex-col p-6 gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="group flex gap-4 items-center text-lg text-gray-300 hover:text-white transition"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-3xl">
                                    •
                                </span>
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <a href={`${import.meta.env.BASE_URL}krish-cv.pdf`}
                        download
                        className='px-6 py-3 cursor-pointer rounded-full bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300'>
                        Download CV
                    </a>
                </ul>
            </div>
        </header>
    );
}

export default Navbar