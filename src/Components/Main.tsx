import React from 'react'
import About from './About'
import Hero from './Hero'
import Tournament from './Tournament'
import Gellery from './Gellery'
import Team from './Team'
import Event from './Event'
import Newslatter from './Newslatter'
import { IoCloseSharp } from "react-icons/io5";

const Main = () => {
    return (
        <>
            <div id="top">
                {/* <!--
              - #HEADER
  --> */}



                <main>
                    <article>                <Hero />
                        <div className="section-wrapper">
                            <About />
                            <Tournament />
                            <Gellery />
                            <Team />
                            <Event />
                            <Newslatter />
                        </div>
                    </article>
                </main>
            </div>
            <a href="#top" className="btn btn-primary go-top" data-go-top>
                <IoCloseSharp />
            </a>
        </>

    )
}

export default Main