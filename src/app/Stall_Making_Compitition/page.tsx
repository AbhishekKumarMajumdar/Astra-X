import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
import Stall from '@/Image/stall.png'
import SingleAbout from '@/Components/SingleAbout'
import SingleRule from '@/Components/SingleRule'
import demo from "@/Data/demo.json"
import Gellery from '@/Components/Gellery'
import Card from '@/Components/Card'
import GroupCard from '@/Components/GroupCard'
import StallBanner from '@/Image/StallBanner.jpg'
import Img1 from "@/Image/DjGallery.jpg"
import Img2 from "@/Image/photoGallery.jpg"
import Main from "@/Image/Cover/stall.jpg"

const Hackathon = () => {
    const gellery = [Img1, Img2];
    const data = {
        title: "Stall Making ",
        form: "https://forms.gle/y1XoDdej2g98cptM6",
        banner: Main,
        rule: ["rule 1", "rule 1", "rule 1", "rule 1", "rule 1", "rule 1", "rule 1", "rule 1"],
        Image: [],
        aboutTitle: "About Title",
        aboutPara: "Showcase & Sell: Craft the stall that stuns the judges and stops the crowd.",
        aboutImage: Stall,

    }
    const cardData = [
        {
            name: "Abhishek Kumar Majumdar ",
            post: "Event Organizer",
            link: "https://wa.me/917455069625?text=I have some questions regarding in event",
        },

        {
            name: "Abhishek , Gayatra ",
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
            <SingleHero Data={data} />
            <div className="section-wrapper">
                <SingleAbout Data={data} />
                <SingleRule Data={data} />
                <Gellery data={gellery} />
                <GroupCard Data={cardData} />
            </div>

        </>
    )
}

export default Hackathon