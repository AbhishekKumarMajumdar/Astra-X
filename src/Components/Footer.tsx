"use client"
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand-wrapper">
                        <a href="#" className="logo">
                            <h1 className='text-white font-mono font-extrabold text-4xl '>Astra-X</h1>

                        </a>

                        <div className="footer-menu-wrapper">
                            <ul className="footer-menu-list">
                                <li>
                                    <a href="#hero" className="navbar-link">Home</a>
                                </li>

                                <li>
                                    <a href="#gears" className="navbar-link">Event</a>
                                </li>

                                <li>
                                    <a href="#team" className="navbar-link">ORGANIZING COMMITTEE</a>
                                </li>



                                <li>
                                    <a href="#about" className="navbar-link">About</a>
                                </li>
                            </ul>

                            <div className="footer-input-wrapper">
                                <input
                                    type="text"
                                    name="message"
                                    required
                                    placeholder="Find Event "
                                    className="footer-input"
                                />

                                <button className="btn btn-primary">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-quicklinks">
                        <ul className="quicklink-list">
                            <li>
                                <a href="#" className="quicklink-item">Faq</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-item">Help center</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-item">Terms of use</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-item">Privacy</a>
                            </li>
                        </ul>

                        <ul className="footer-social-list">
                            <li>
                                <a href="#" className="footer-social-link">
                                    <FaInstagram />                                 </a>
                            </li>

                            <li>
                                <a href="#" className="footer-social-link">
                                    <FaFacebook />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-social-link">
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="footer-social-link">
                                    <IoLogoYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container ">
                    <p className="copyright">
                        Copyright &copy; 2023 <a href="#">Abhishek majumdar </a> & <a href="#">Rahul </a>. all rights reserved
                    </p>
                </div>
            </div>
        </footer>)
}

export default Footer