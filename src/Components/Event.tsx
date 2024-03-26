"use client";
import React from 'react'
import Hackathon from '@/Image/bg.jpg'
import Link from 'next/link';
import { LuClock3 } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import Image from 'next/image';


const Event = () => {

    const AllEvents = [
        {
            name: "E-Sport",
            link: "/events",
            image: " "
        },
        {
            name: "Hackathon",
            link: "/hackathon",
            image: " "
        },
        {
            name: "Innovation & Startups Ideas",
            link: "/events",
            image: " "
        },
        {
            name: "UI/UX DESIGNING",
            link: "/events",
            image: " "
        },
        {
            name: "CAD MODELING",
            link: "/events",
            image: " "
        },
        {
            name: "BRIDGE MAKING",
            link: "/events",
            image: " "
        },
        {
            name: "STALL MAKING COMPETITION",
            link: "/Stall_Making_Compitition",
            image: " "
        },
        {
            name: "GRAPHIC DESIGNING",
            link: "/events",
            image: " "
        },
        {
            name: "PHOTOGRAPHY COMPETITION",
            link: "/events",
            image: " "
        },
        {
            name: "CINEMATOGRAPHY COMPETITION",
            link: "/events",
            image: " "
        },
        {
            name: "FASHION SHOW ",
            link: "/events",
            image: " "
        },
    ]
    return (
        <>
            <section className="gears" id="gears">
                <div className="container">
                    <h2 className="h2 section-title">Events</h2>

                    <ul className="gears-list">
                        {AllEvents.map((e) => (
                            <li key={e.name}>
                                <div className="gears-card">
                                    <div className="card-banner">
                                        <a href="#">
                                            <Image
                                                // src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gears-img-1.png"
                                                src="https://github.com/AbhishekKumarMajumdar/TechFest-2k24/blob/main/src/Components/Image/bg2.png?raw=true"
                                                alt="Headphone"
                                                fill={true}
                                                className='!relative'
                                            />
                                        </a>
                                        <div className="card-time-wrapper">
                                            <LuClock3 />

                                            <span>In 4 days</span>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <div className="card-title-wrapper">
                                            <h3 className="h3 card-title">{e.name}</h3>
                                        </div>

                                    </div>

                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            <LuPlus />

                                            <Link href={e.link}><span>Explore</span></Link>
                                        </button>


                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Event