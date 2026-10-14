import React from "react";

const Navbar = () => {
    return (
        <div className="sticky top-0">
            <nav className="flex items-center justify-between px-12 py-3 bg-linear-to-r from-[#0e7490] to-[#002444]">
                <div className="flex items-center gap-9 ">
                    <a
                        href="/"
                        className="font-['Bungee'] text-[31px] tracking-wider text-white uppercase"
                    >
                        TinyURL
                    </a>
                    <ul className="hidden md:flex gap-8 text-xl text-white">
                        <li>
                            <a href="#">Plans</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Domains</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-6 text-white">
                    <a href="#" className="text-lg">
                        Log In
                    </a>
                    <a
                        href="#"
                        className="px-3 py-1.5 rounded-md bg-[#0e7490] text-lg hover:bg-[#0c6178] transition"
                    >
                        Sign Up
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
