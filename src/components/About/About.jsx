import React from 'react'
import aboutUsImg from '../../assets/AboutUs-unsplash.jpg'
import Lottie from "lottie-react";
import measuringTape from '../../assets/measuringTape.json'
import placeholder from '../../assets/placeholder.jpg'
import './About.css'

const AboutUs = ()=>{
    return(
        <section id="AboutUs" className='--about-section-container'>
            <img id='about-img' className='--about-img' src={aboutUsImg} alt="" />
            <div className='--about-text-container'>
                <h2 className='--about-home-tag'>Tired of your <span>Home</span></h2>
                <p className='--about-home-text black'>Our expert home renovation services will revitalize your living space and bring new life to your home.</p>
                <h2 className='--about-ready-tag'><span>Ready</span> for a change?</h2>
                <p className='--about-ready-text black'>Our renovation services transform your home in record time without sacrificing quality</p>
                <h2 className='--about-renovations-tag'>Expect Detailed <span>Renovations</span></h2>
                <p className='--about-renovation-text black'>Our detailed renovations enhance your home's beauty and functionality.</p>
                <Lottie id='about-measure-img' className='--about-measure-img' animationData={measuringTape} loop={true} />
            </div>       
        </section>
)
}

export default AboutUs