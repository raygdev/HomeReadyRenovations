import React, { useState, useEffect } from 'react'
import fbIcon from '../../assets/icons/facebook.svg'
import instaIcon from '../../assets/icons/instagram.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import youtubeIcon from '../../assets/icons/youtube.svg'
import { Outlet, Link } from 'react-router-dom'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import DesktopHeader from '../../components/DesktopHeader/DesktopHeader'
import { useCurrentWidth } from '../../hooks/findWidth'
import woodGrain from '../../assets/woodGrain-unsplash.jpg'
import placeholder from '../../assets/placeholder.jpg'
import './Layout.css'


export const loader = ()=>{
  return null
}

export const Layout = ()=> {
  const width = useCurrentWidth()

  const asideContainerStyles = {
      backgroundImage:`URL(${woodGrain})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
  }
  
  return(
    <>    
      {width < 750 ? (<MobileHeader/>): (<DesktopHeader/>)}
      <div id='content-container'>
        <div className='--layout-aside-container' style={asideContainerStyles}>
          <div className='--layout-aside-content-container flex flex-column'>
            <h2 className='--layout-current-nav white center'>About Us</h2>   
            <div className='--layout-aside-social-container'>
              <ul className='--layout-aside-social-list flex flex-column flex-center flex-align-center'>
                <Link><li><img className='social-icon fb' src={fbIcon} alt="facebook icon" /></li></Link>
                <Link><li><img className='social-icon insta' src={instaIcon} alt="instagram icon" /></li></Link>
                <Link><li><img className='social-icon tiktok' src={tiktokIcon} alt="tiktok icon" /></li></Link>
                <Link><li><img className='social-icon ytbe' src={youtubeIcon} alt="youtube icon" /></li></Link>
              </ul>
            </div>
          </div>    
        </div>
        <div id='scroll-container'>
          <div className='--layout-mainfooter-flex flex flex-column'>
            <main className='--layout-main-container'>
              <section className='--layout-jumbo-section'>
                <img id='jumbo-anim' className='--layout-jumbo-anim placeholder' src={placeholder} alt="" />
                <h2 className='--layout-jumbo-title'>Quality Renovations for LARGE & small Homes</h2>
                <p className='--layout-jumbo-text'>Revamp your living space with our exceptional home renovation services. We deliver functional and stylish results that increase your property value. Let's bring your vision to life!</p>
              </section>
              <section>
                <img src={placeholder} className='placeholder' alt="" />
                <h2>Tired of your <span>Home</span></h2>
                <p>Our expert home renovation services will revitalize your living space and bring new life to your home.</p>
                <h2><span>Ready</span> for a change?</h2>
                <p>Our renovation services transform your home in record time without sacrificing quality</p>
                <h2>Expect Detailed <span>Renovations</span></h2>
                <p>Our detailed renovations enhance your home's beauty and functionality.</p>
              </section>
              <section>
                <div>
                  <img src={placeholder} className='placeholder' alt="" />
                  <h2>Commerical Renovations</h2>
                  <Link>View More</Link>
                </div>
                <div>
                  <img src={placeholder} className='placeholder' alt="" />
                  <h2>Interior Renovations</h2>
                  <Link>View More</Link>
                </div>
                <div>
                  <img src={placeholder} className='placeholder' alt="" />
                  <h2>Exterior Renovations</h2>
                  <Link>View More</Link>
                </div>
              </section>
              <section>
                <h2>Testimonials speak volumes. They fuel our passion for delivering exceptional home renovations.</h2>
                <div>
                  <p>Their construction company exceeded all expectations, delivering impeccable craftsmanship, outstanding service, and a truly remarkable experience.</p>
                  <p>-Bob and Sally</p>
                </div>
              </section>
            </main>
            <footer className='--layout-footer flex flex-wrap'>
              <p>©️2023 Home Ready Renovations</p>
              <p>(405)473-1503</p>
              <p>makereadyreno@gmail.com</p>
            </footer>
          </div>
          
        </div>   
      </div>
      
    </>
  )
}
