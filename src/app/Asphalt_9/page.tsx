import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
import Graphic from '@/Image/Asphalt.png'
import Img1 from "@/Image/DjGallery.jpg"
import Img2 from "@/Image/photoGallery.jpg"
import Stall from '@/Image/Hackathon.png'
import SingleAbout from '@/Components/SingleAbout'
import SingleRule from '@/Components/SingleRule'
import Gellery from '@/Components/Gellery'
import GroupCard from '@/Components/GroupCard'

const Fashion = () => {

    const gellery = [Img1, Img2];
    const data = {
        title: "Asphalt 9",
        form: "https://forms.gle/wXmpKCCTjBPMVomS8",
        banner: Graphic,
        rule: [
            "All the students who had got themselves registered will compete with each other.",
            "All the students have to go through knock-out matches with each other.",
            "System will provided to play",
            "Teams must adhere to the rules and guidelines provided by the organizers.",
            "Any form of cheating or plagiarism will result in disqualification. ",
            "If you'd like to access all the rules, you can download the rule book."
        ],
        Image: [],
        aboutTitle: "About Title",
        aboutPara: "Gear up for high-octane competition in Asphalt 9's world of mobile racing esports!",
        aboutImage: Graphic,

    }
    const cardData = [
        {
            name: "Abhishek Kumar Majumdar ",
            post: "Event Organizer",
            link: "https://wa.me/917455069625?text=I have some questions regarding E-Chess",
        },

        {
            name: "Akash",
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

export default Fashion