import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
import StallBanner from '@/Image/StallBanner.jpg'
import Img1 from "@/Image/DjGallery.jpg"
import Img2 from "@/Image/photoGallery.jpg"
import Stall from '@/Image/Hackathon.png'
import SingleAbout from '@/Components/SingleAbout'
import SingleRule from '@/Components/SingleRule'
import Gellery from '@/Components/Gellery'
import GroupCard from '@/Components/GroupCard'
import Main from "@/Image/Cover/codeBursr.jpg"
const Hackathon = () => {

    const gellery = [Img1, Img2];
    const data = {
        title: "Hackathon",
        form: "https://forms.gle/x7CszU124ix3P7oN8",
        banner: Main,
        rule: [
            "Each team must consist of exactly 4 members",
            "It is mandatory for each team to include at least 1 female student.",
            "The hackathon consists of a total of 3 rounds, each focusing on different aspects of project development.",
            "Each team must choose one domain (e.g., AR VR, AI, Android development, Web development) and work on aproblem statement provided for that domain.",
            " Only 10-15 teams will be eligible to participate in this Hackathon. If the number of team registrations exceeds 10-15, we will organize an elimination round to select the final participants.",
            "All participants must bring their laptops and necessary accessories.",
            "Access to charging facilities will be provided, and participants are responsible for their charging and extension board.",
            "If you'd like to access all the rules, you can download the rule book."
        ],
        Image: [],
        aboutTitle: "About Title",
        aboutPara: "Hackers unite! A coding marathon to create the next big innovation.",
        aboutImage: Stall,

    }
    const cardData = [
        {
            name: "Abhishek Kumar Majumdar ",
            post: "Event Organizer",
            link: "https://wa.me/917455069625?text=I have some questions regarding Hackathon",
        },

        {
            name: "Abhishek Kumar Majumdar ",
            post: "Event Coodinetor",
            link: "",
        },

        {
            name: "Neha Bisht",
            post: "Faculty Coodinetor",
            link: "",
        },

    ]
    return (
        <>
            <>
                <SingleHero Data={data} />
                <div className="section-wrapper">
                    <SingleAbout Data={data} />
                    <SingleRule Data={data} />
                    <Gellery data={gellery} />
                    <GroupCard Data={cardData} />
                </div>

            </>        </>
    )
}

export default Hackathon