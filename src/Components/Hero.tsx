import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="container">
                    <p className="hero-subtitle">AKIT Presents</p>

                    <h1 className="h1 hero-title">Astra-X</h1>

                    <div className="btn-group">
                        <button className="btn btn-primary">
                            <span>Explore Event</span>
                            <FaCirclePlay />
                        </button>

                        <button className="btn btn-link">Dream making</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero