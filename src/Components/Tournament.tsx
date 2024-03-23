import Image from 'next/image'
import React from 'react'

const Tournament = () => {
    return (
        <>
            <section className="tournament" id="tournament">
                <div className="container">
                    <div className="tournament-content">
                        <p className="tournament-subtitle">Check out our next</p>

                        <h2 className="h3 tournament-title">Gaming tournaments !</h2>

                        <p className="tournament-text">
                            Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et
                            dolore magna aliqua.
                        </p>

                        <button className="btn btn-primary">Join with us</button>
                    </div>

                    <div className="tournament-prize">
                        <h2 className="h3 tournament-prize-title">Prize pool</h2>

                        <data value="80000">$80000</data>

                        <figure>
                            <Image
                                src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/prize-img.png"
                                alt="Prize image"
                                className='!relative'
                                fill={true}

                            />
                        </figure>
                    </div>

                    <div className="tournament-winners">
                        <h2 className="h3 tournament-winners-title">Last winners</h2>

                        <ul className="tournament-winners-list">
                            <li>
                                <div className="winner-card">
                                    <figure className="card-banner">
                                        <Image
                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/winner-img-1.png"
                                            alt="Winner image"
                                            className='!relative'
                                            fill={true}
                                        />
                                    </figure>

                                    <h3 className="h5 card-title">1st place</h3>
                                </div>
                            </li>

                            <li>
                                <div className="winner-card">
                                    <figure className="card-banner">
                                        <Image
                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/winner-img-2.png"
                                            alt="Winner image"
                                            className='!relative'
                                            fill={true}
                                        />
                                    </figure>

                                    <h3 className="h5 card-title">2nd place</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tournament