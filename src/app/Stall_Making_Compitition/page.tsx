import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
import Stall from '@/Image/stall.png'
import SingleAbout from '@/Components/SingleAbout'
import SingleRule from '@/Components/SingleRule'
import DynamicTable from '@/Components/DynamicTable'
import demo from "@/Data/demo.json"
import Gellery from '@/Components/Gellery'

const Hackathon = () => {
    const data = {
        title: "Stall Making ",
        form: "https://forms.gle/y1XoDdej2g98cptM6",
        rule: ["rule 1", "rule 1", "rule 1", "rule 1", "rule 1", "rule 1", "rule 1", "rule 1"],
        Image: [],
        aboutTitle: "About Title",
        aboutPara: "Showcase & Sell: Craft the stall that stuns the judges and stops the crowd.",
        aboutImage: Stall,

    }


    return (
        <>
            <SingleHero Data={data} />
            <div className="section-wrapper">
                <SingleAbout Data={data} />
                <SingleRule Data={data} />
                <DynamicTable tableData={demo} />
                <Gellery />
            </div>

        </>
    )
}

export default Hackathon