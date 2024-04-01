"use client";
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Logo from "@/Image/Logo.png"
import Image from 'next/image';

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState<Boolean>(false);


    return (

        <>
            <header className="header z-50">
                {/* <!--
                  - overlay
    --> */}
                <div className={`overlay `} data-overlay></div>

                <div className="container">
                    {/* <a href="#" className="logo">
                        <img
                            src="https://raw.githubusercontent.com/codewithsadee/gamex/244de1829b8ad4249fcf160fc8cdaa4cc25db7ba/assets/images/logo.svg"
                            alt="GameX logo"
                        />
                    </a> */}
                    <Image src={Logo} alt='Logo' className="w-[100px] md:w-[180px]" />

                    {/* <h1 className='text-white font-mono font-extrabold text-4xl '>Astra-X</h1> */}

                    <button onClick={() => setIsOpen(!isOpen)} className="nav-open-btn" data-nav-open-btn>
                        <IoMdMenu />                    </button>

                    <nav className={`navbar ${isOpen ? 'visible right-0' : 'invisible -right-[300px]'} md:visible`} data-nav>
                        <div className="navbar-top">
                            <a href="#" className="logo">
                                {/* <img
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/244de1829b8ad4249fcf160fc8cdaa4cc25db7ba/assets/images/logo.svg"
                                    alt="GameX logo"
                                /> */}
                                <Image src={Logo} alt='Logo' className="w-[100px] md:w-[180px]" />


                            </a>

                            <button onClick={() => setIsOpen(!isOpen)} className="nav-close-btn" data-nav-close-btn>
                                <IoCloseSharp />                            </button>
                        </div>

                        <ul className={`navbar-list `} >
                            <li>
                                <a href="/" className="navbar-link">Home</a>
                            </li>

                            <li>
                                <a href="/#gears" className="navbar-link">Event</a>
                            </li>

                            <li>
                                <a href="#team" className="navbar-link">ORGANIZING COMMITTEE</a>
                            </li>



                            <li>
                                <a href="#about" className="navbar-link">About</a>
                            </li>

                        </ul>

                        <ul className="nav-social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <FaInstagram />                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FaFacebook />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <IoLogoYoutube />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button className="search">
                            <IoSearch />                        </button>

                        <button className="btn-sign_in">
                            <div className="icon-box">
                                <CiLogin />                            </div>

                            <span>Registration</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar