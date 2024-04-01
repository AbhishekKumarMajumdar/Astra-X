import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
import Graphic from '@/Image/Innovation.png'
import Img1 from "@/Image/DjGallery.jpg"
import Img2 from "@/Image/photoGallery.jpg"
import Stall from '@/Image/Hackathon.png'
import SingleAbout from '@/Components/SingleAbout'
import SingleRule from '@/Components/SingleRule'
import Gellery from '@/Components/Gellery'
import GroupCard from '@/Components/GroupCard'
import Main from "@/Image/Cover/innovation.jpg"

const Fashion = () => {

    const gellery = [Img1, Img2];
    const data = {
        title: "Innovation Ideas ",
        form: "https://forms.gle/iNAH2Gqre9CVi1M19",
        banner: Main,
        rule: [
            "The maximum team member in the group should be 5.",
            "Maximum time given for presentation is 10 minutes.",
            "All member need to be part of presentation",
            "All member in the group have a assigned work",
            "Try to keep your startup idea something innovative & futuristic. ",
            "If you'd like to access all the rules, you can download the rule book."
        ],
        Image: [],
        aboutTitle: "About Title",
        aboutPara: "Step to turn creative solutions into successful businesses.",
        aboutImage: Graphic,

    }
    const cardData = [
        {
            name: "Abhishek Kumar Majumdar ",
            post: "Event Organizer",
            link: "https://wa.me/917455069625?text=I have some questions regarding STYLE SENSATION",
        },

        {
            name: "Abhishek & Kartik ",
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