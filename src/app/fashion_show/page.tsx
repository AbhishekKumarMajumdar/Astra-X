import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
import Graphic from '@/Image/FasionShow.png'
import Img1 from "@/Image/DjGallery.jpg"
import Img2 from "@/Image/photoGallery.jpg"
import Stall from '@/Image/Hackathon.png'
import SingleAbout from '@/Components/SingleAbout'
import SingleRule from '@/Components/SingleRule'
import Gellery from '@/Components/Gellery'
import GroupCard from '@/Components/GroupCard'
import Main from '@/Image/Cover/FashionShow.jpg'
const Fashion = () => {

    const gellery = [Img1, Img2];
    const data = {
        title: "Style Sensation ",
        form: "https://docs.google.com/forms/d/e/1FAIpQLScrdpJIMF4Bh9ALM0LwCmIOlxtrIMzWtkxT3Dnje1xVQx6mqg/viewform?usp=send_form&amp;usp=embed_facebook",
        banner: Main,
        rule: [
            "There will be two themes given to the contestants 1. Fusion(indo - western)  2. Retro(80's & 90's fashion)",
            "Only 32 contestants are allowed for this event.",
            "On more than 32 contestants there will be an elimination round held before a week. ",
            "Contestants are required to bring their own outfits and belongings as college will not provide you anything. ",
            "There will be total 3 rounds",
            "Round 1 - Walk & Intro  Round 2 - Talent & Task Round 3 - Questionare",
            "Ex- Mr & Miss AKIT are not allowed to participate , as we need new faces this time. ",
            "If you'd like to access all the rules, you can download the rule book."
        ],
        Image: [],
        aboutTitle: "About Title",
        aboutPara: "Stage for sashaying steps: Where fashion takes its final bow.",
        aboutImage: Graphic,

    }
    const cardData = [
        {
            name: "Abhishek Kumar Majumdar ",
            post: "Event Organizer",
            link: "https://wa.me/917455069625?text=I have some questions regarding STYLE SENSATION",
        },

        {
            name: "Kartik & Vasuda ",
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