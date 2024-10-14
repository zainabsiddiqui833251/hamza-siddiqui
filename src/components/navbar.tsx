'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [caseStudiesDropdownOpen, setCaseStudiesDropdownOpen] = useState<boolean>(false);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const toggleCaseStudiesDropdown = () => {
        setCaseStudiesDropdownOpen(prev => !prev);
    };

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <nav className="w-full flex justify-between items-center p-4 transition-all duration-300 bg-[#339989] text-white">
            <div className="logo">
                <Link href='/'>
                    <h1 className="text-[#333333] text-xl md:text-2xl ml-10 font-extrabold">H.Sidd</h1>
                </Link>
            </div>

            {/* Navbar Links for larger screens */}
            <div className="hidden sm:flex nav_links">
                <ul className='flex justify-center items-center gap-5 text-lg md:text-xl relative'>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    {/* Dropdown for Services */}
                    <li className='relative'>
                        <button onClick={toggleDropdown} className='focus:outline-none'>
                            <span>Services</span>
                            <i className={`bi bi-chevron-down ${dropdownOpen ? 'rotate-180' : ''} transition-transform duration-200 ml-1`}></i>
                        </button>
                        {dropdownOpen && (
                            <ul className='dropdown-item absolute w-36 bg-[#E3F2FD] text-[#333333] mt-2 p-2 rounded-lg shadow-lg space-y-2 z-30'>
                                <li>
                                    <Link href='/services' className='hover:text-[#339989]'>Services</Link>
                                </li>
                                <li>
                                    <Link href='/statistics' className='hover:text-[#339989]'>Statistics</Link>
                                </li>
                                {/* Case Studies Dropdown */}
                                <li className='relative'>
                                    <button onClick={toggleCaseStudiesDropdown} className='flex justify-between w-full focus:outline-none'>
                                        <span>Case Studies</span>
                                        <i className={`bi bi-chevron-right ${caseStudiesDropdownOpen ? 'rotate-90' : ''} transition-transform duration-200`}></i>
                                    </button>
                                    {caseStudiesDropdownOpen && (
                                        <ul className='dropdown-item absolute left-28 w-40 bg-[#FAD4D4] text-[#333333] mt-2 p-2 rounded-lg shadow-lg space-y-2 z-30'>
                                            <li>
                                                <Link href='/case-studies1' className='hover:text-[#339989]'>Case Study 1 - USA</Link>
                                            </li>
                                            <li>
                                                <Link href='/case-study-2' className='hover:text-[#339989]'>Case Study 2 - UK</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link href='/client-portfolio' className='hover:text-[#339989]'>Client Portfolio</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link href='/faqs'>FAQs</Link>
                    </li>
                </ul>
            </div>

            {/* Sidebar for mobile view */}
            {sidebarOpen && (
                <div className={`fixed top-0 left-0 w-64 h-full bg-[#339989] text-[#333333] z-50 shadow-lg transition-transform transform translate-x-0`}>
                    <button className="absolute top-4 right-4" onClick={toggleSidebar}>
                        <i className="bi bi-x-lg"></i> {/* Close icon */}
                    </button>
                    <ul className="flex flex-col p-4">
                        <li className="mb-2 text-lg md:text-xl">
                            <Link href='/about'>About</Link>
                        </li>
                        <li className="mb-2 text-lg md:text-xl">
                            <button onClick={toggleDropdown} className='focus:outline-none'>
                                <span>Services</span>
                                <i className={`bi bi-chevron-down ${dropdownOpen ? 'rotate-180' : ''} transition-transform duration-200 ml-1`}></i>
                            </button>
                            {dropdownOpen && (
                                <ul className='dropdown-item bg-[#E3F2FD] text-[#333333] mt-2 p-2 rounded-lg shadow-lg space-y-2'>
                                    <li>
                                        <Link href='/services' className='hover:text-[#339989]'>Services</Link>
                                    </li>
                                    <li>
                                        <Link href='/statistics' className='hover:text-[#339989]'>Statistics</Link>
                                    </li>
                                    <li className='relative'>
                                        <button onClick={toggleCaseStudiesDropdown} className='flex justify-between w-full focus:outline-none'>
                                            <span>Case Studies</span>
                                            <i className={`bi bi-chevron-right ${caseStudiesDropdownOpen ? 'rotate-90' : ''} transition-transform duration-200`}></i>
                                        </button>
                                        {caseStudiesDropdownOpen && (
                                            <ul className='dropdown-item bg-[#FAD4D4] text-[#333333] mt-2 p-2 rounded-lg shadow-lg space-y-2'>
                                                <li>
                                                    <Link href='/case-studies1' className='hover:text-[#339989]'>Case Study 1 - USA</Link>
                                                </li>
                                                <li>
                                                    <Link href='/case-study-2' className='hover:text-[#339989]'>Case Study 2 - UK</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <Link href='/client-portfolio' className='hover:text-[#339989]'>Client Portfolio</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="mb-2 text-lg md:text-xl">
                            <Link href='/blogs'>Blogs</Link>
                        </li>
                        <li className="mb-2 text-lg md:text-xl">
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className="mb-2 text-lg md:text-xl">
                            <Link href='/faqs'>FAQs</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
