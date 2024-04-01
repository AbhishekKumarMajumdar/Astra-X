import Image from 'next/image'
import React from 'react'
import Img from "@/Image/pngwing.com (9).png"
import { FaArrowCircleRight } from "react-icons/fa";
const SingleAbout = (props: { Data: any }) => {
    return (
        <section className="about" id="about">
            <div className="container">
                <figure className="about-banner">
                    <Image
                        src={props.Data?.aboutImage}
                        className=''

                        alt='logo' />

                    {/* <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/about-img.png"
                        alt="M shape"
                        className="about-img"
                    />

                    <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/character-1.png"
                        alt="Game character"
                        className="character character-1"
                    />

                    <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/character-2.png"
                        alt="Game character"
                        className="character character-2"
                    />

                    <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/character-3.png"
                        alt="Game character"
                        className="character character-3"
                    /> */}
                </figure>

                <div className="about-content">
                    <p className="about-subtitle">Register now !</p>

                    <h2 className="about-title">
                        {props.Data.aboutPara}  {/*  <strong>Hackathon Event! </strong> */}
                    </h2>

                    {/* <p className="about-text">
                        {props.Data?.aboutPara}
                    </p> */}

                    <p className="about-bottom-text">
                        <FaArrowCircleRight className='mt-1 text-[18px]' color='rgb(255, 134, 5)' />
                        <span>Will sharpen your brain and focus</span>
                    </p>
                </div>
            </div>
        </section>)
}

export default SingleAbout