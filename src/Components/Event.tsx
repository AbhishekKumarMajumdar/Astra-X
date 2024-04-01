"use client";
import React from 'react'
import Link from 'next/link';
import { LuClock3 } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import Image from 'next/image';

import Hackathon from '../Image/Banner/code burst.jpg'
import Innovation from '../Image/Banner/inovation.jpg'
import UI from '../Image/Banner/uiux.jpg'
import Cad from '../Image/Banner/cad modelinhg.jpg'
import bridge from '../Image/Banner/bridge making.jpg'
import Graphic from '../Image/Banner/graphic designing.jpg'
import photo from '../Image/Banner/photgraphy comp.jpg'
import Cinema from '../Image/Banner/cinematograpghy.jpg'
import Fasion from '../Image/Banner/fashion show.jpg'
import Stall from '../Image/Banner/stall.jpg'

const Event = () => {
    const AllEvents = [
        {
            name: "Hackathon",
            link: "/hackathon",
            image: Hackathon
        },
        {
            name: "Innovation & Startups Ideas",
            link: "/Innovation_&_Startup_Ideas",
            image: Innovation
        },
        {
            name: "STALL MAKING COMPETITION",
            link: "/Stall_Making_Compitition",
            image: Stall
        },
        {
            name: "Valorant",
            link: "/events",
            image: " "
        },
        {
            name: "BGMI",
            link: "/events",
            image: " "
        },
        {
            name: "Freefire",
            link: "/events",
            image: " "
        },
        {
            name: "E-chess",
            link: "/chess",
            image: " "
        },
        {
            name: "Asphalt 9",
            link: "/Asphalt_9",
            image: " "
        },
        {
            name: "Fall guys",
            link: "/events",
            image: " "
        },


        {
            name: "UI/UX DESIGNING",
            link: "/events",
            image: UI
        },
        {
            name: "CAD MODELING",
            link: "/events",
            image: Cad
        },
        {
            name: "BRIDGE MAKING",
            link: "/events",
            image: bridge
        },

        {
            name: "GRAPHIC DESIGNING",
            link: "/events",
            image: Graphic
        },
        {
            name: "PHOTOGRAPHY COMPETITION",
            link: "/events",
            image: photo
        },
        {
            name: "CINEMATOGRAPHY COMPETITION",
            link: "/events",
            image: Cinema
        },
        {
            name: "FASHION SHOW ",
            link: "/fashion_show",
            image: Fasion
        },
    ]
    return (
        <>
            <section className="gears" id="gears">
                <div className="container">
                    <h2 className="h2 section-title">Events</h2>

                    <ul className="gears-list">
                        {AllEvents.map((e: any) => (
                            <li key={e.name}>
                                <div className="gears-card">
                                    <div className="card-banner">
                                        <a href="#">
                                            <Image
                                                // src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gears-img-1.png"

                                                // src="https://github.com/AbhishekKumarMajumdar/TechFest-2k24/blob/main/src/Components/Image/bg2.png?raw=true"
                                                src={e.image.src}
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