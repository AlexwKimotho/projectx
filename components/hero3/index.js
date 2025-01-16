import React from "react";
import Link from 'next/link'
import hero from '/public/images/slider/slide-4.jpg'
import shape1 from '/public/images/slider/sp2.png'
import shape2 from '/public/images/slider/sp1.png'
import shape3 from '/public/images/slider/sp3.png'
import shape4 from '/public/images/slider/sp4.png'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero3 = (props) => {
    return(
        <section className="hero-style-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="wpo-slide-content">
                            <div className="slide-title">
                                <h2>Stay Once Carry Memories Forever</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                 <Link className="theme-btn" onClick={ClickHandler} href="/room"> Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <Image src={hero} alt=""/>
                                    </div>
                                    <div className="sp-1"><Image src={shape1} alt=""/></div>
                                    <div className="sp-2"><Image src={shape2} alt=""/></div>
                                    <div className="sp-3"><Image src={shape3} alt=""/></div>
                                    <div className="sp-4"><Image src={shape4} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-text">
                <h2>Parador</h2>
            </div>
        </section>
    )
}

export default Hero3;