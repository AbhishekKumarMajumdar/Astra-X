import SingleHero from '@/Components/SingleHero'
import React from 'react'
import '@/Style/Style.css'
const Hackathon = () => {
    const data = {
        title: "Hackathan",
        form: "https://forms.gle/x7CszU124ix3P7oN8",
        rule: [],
        Image: [],

    }
    return (
        <>
            <SingleHero Data={data} />
        </>
    )
}

export default Hackathon