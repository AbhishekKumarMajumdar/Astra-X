"use client"
import React from 'react'
import Card from './Card'

const GroupCard = (props: { Data: any }) => {
    const data = props.Data;
    const [cardData, setCard] = React.useState<any>(data);
    return (
        <>
            <div className="relative w-[100vw] flex min-h-auto flex-col gap-4 md:gap-0 md:flex-row justify-around overflow-hidden bg-transparent px-10 py-6 pb-8 sm:py-12">
                <Card data={cardData[0]} />
                <Card data={cardData[1]} />
                <Card data={cardData[2]} />

            </div>
        </>
    )
}

export default GroupCard