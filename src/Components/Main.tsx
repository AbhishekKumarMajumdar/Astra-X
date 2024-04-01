"use client";

import React from 'react'
import About from './About'
import Hero from './Hero'
import Tournament from './Tournament'
import Team from './Team'
import Event from './Event'
import Newslatter from './Newslatter'
import { IoCloseSharp } from "react-icons/io5";
import dynamic from 'next/dynamic';
import Dj from "@/Image/DjGallery.jpg"
import Photo from "@/Image/photoGallery.jpg"
const Gellery = dynamic(() => import('./Gellery'))


import Hackathon from '../Image/Banner/code burst.jpg'
import Innovation from '../Image/Banner/inovation.jpg'
import UI from '../Image/Banner/uiux.jpg'
import Cad from '../Image/Banner/cad modelinhg.jpg'
import bridge from '../Image/Banner/bridge making.jpg'
import Graphic from '../Image/Banner/graphic designing.jpg'
import photo from '../Image/Banner/photgraphy comp.jpg'
import Cinema from '../Image/Banner/cinematograpghy.jpg'
import Fasion from '../Image/Banner/fashion show.jpg'
const Main = () => {
    const gellery = [Hackathon, Innovation, UI, Cad, bridge, Graphic, photo, Cinema, Fasion];
    return (
        <>
            <div id="top">
                {/* <!--
              - #HEADER
  --> */}



                <main>
                    <article>
                        <Hero />
                        <div className="section-wrapper">
                            <About />
                            <Tournament />
                            <Gellery data={gellery} />
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