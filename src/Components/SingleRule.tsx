"use client"
import React from 'react'
const SingleRule = (props: { Data: any }) => {

    return (
        <>
            <section className='w-[100vw] h-auto px-4 md:px-24'>
                <h1 className='text-4xl text-[#ff8605] capitalize' >Event Rule Book:</h1>
                <ol className='pt-6'>
                    {props.Data?.rule.map((e: any, index: number) => (
                        <li key={e} className='text-white px-4 py-2'>{index + 1}. {e}</li>
                    ))}
                </ol>
                <button className="btn btn-primary my-4 md:my-8">
                    <a href="/"> <span>Download</span></a>
                </button>


            </section>
        </>
    )
}

export default SingleRule