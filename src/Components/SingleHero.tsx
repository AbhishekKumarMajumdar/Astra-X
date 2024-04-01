import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import Logo from "../Image/banner-bg.jpg"

const SingleHero = (props: { Data: any }) => {
    return (
        <>
            <section style={{ background: `url(${props.Data.banner.src}) center center/cover` }} className={`w-[100vw] h-[100vh] flex  justify-center items-center`}>
                <div className="container">
                    <p className="hero-subtitle text-center">AKIT Presents</p>

                    <h1 className="h1 hero-title text-center">{props.Data?.title}</h1>

                    <div className="btn-group">
                        <button className="btn btn-primary">
                            <a href={props.Data?.form}> <span>Registration Now !</span></a>
                            <FaCirclePlay />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleHero