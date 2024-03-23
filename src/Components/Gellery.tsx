import Image from 'next/image'
import React from 'react'
Image
const Gellery = () => {
    return (
        <>
            <section className="gallery">
                <div className="container">
                    <ul className="gallery-list has-scrollbar">
                        <li>
                            <figure className="gallery-item">
                                <Image
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-1.jpg"
                                    alt="Gallery image"
                                    fill={true}
                                    className='!relative'
                                />
                            </figure>
                        </li>

                        <li>
                            <figure className="gallery-item">
                                <Image
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-2.jpg"
                                    alt="Gallery image"
                                    fill={true}
                                    className='!relative'
                                />
                            </figure>
                        </li>

                        <li>
                            <figure className="gallery-item">
                                <Image
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-3.jpg"
                                    alt="Gallery image"
                                    fill={true}
                                    className='!relative'
                                />
                            </figure>
                        </li>

                        <li>
                            <figure className="gallery-item">
                                <Image
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-4.jpg"
                                    alt="Gallery image"
                                    fill={true}
                                    className='!relative'
                                />
                            </figure>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Gellery