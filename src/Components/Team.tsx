"use client"
import React from 'react'
import Abhi from "@/Image/Abhishek.jpg"
import Gayatra from "@/Image/Gayatra.jpg"
import Akash from "@/Image/Akash.jpg"
import Jayent from "@/Image/Jayent.jpg"
import Prakhar from "@/Image/Prakhar.jpg"
import Aman from "@/Image/Aman.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { FaLink } from "react-icons/fa6";

const Team = () => {

    const TeamMember = [
        {
            name: "Abhishek kumar Majumdar",
            src: Abhi,
            link: "https://in.linkedin.com/in/theabhishekmajumdar"
        },
        {
            name: "Gayatra Bhatt",
            src: Gayatra,
            link: "https://in.linkedin.com/in/gayatha-bhatt"
        }
        ,

        {
            name: "Jayent",
            src: Jayent,
            link: "/"
        }
        ,
        {
            name: "Prakhar",
            src: Prakhar,
            link: "/"
        },
        {
            name: "Aman",
            src: Aman,
            link: "/"
        },
        {
            name: "Akash",
            src: Akash,
            link: "https://www.linkedin.com/in/akash-mehra-4279ab260/"
        }

    ]
    return (
        <>
            <section className="team" id="team">
                <div className="container">
                    <h2 className="h2 section-title">Event Organizing Team</h2>

                    <ul className="team-list">
                        {TeamMember.map((member) => (
                            <li key={member.name} className="team-card">
                                <Link href={member.link} className="team-member">
                                    <figure className=' overflow-hidden lg:w-[150px] lg:h-[150px]'>
                                        <Image src={member.src} className='!relative w-[100px] h-[100px] rounded-[50%]' layout="fill" alt='abhi' />
                                    </figure>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="btn btn-primary">view all members</button>
                </div>
            </section>
        </>)
}

export default Team