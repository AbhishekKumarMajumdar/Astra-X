"use client";
import Image from 'next/image'
import React from 'react'
const Gellery = (props: { data: any }) => {
    return (
        <>
            <section className="gallery">
                <div className="container">
                    <ul className="gallery-list has-scrollbar">
                        {
                            props.data?.map((item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <figure className="gallery-item">

                                            <Image
                                                src={item.src}
                                                //    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-2.jpg"
                                                alt="Gallery image"
                                                fill={true}
                                                className='!relative cursor-pointer'
                                            />
                                        </figure>
                                    </li>)
                            })
                        }

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Gellery