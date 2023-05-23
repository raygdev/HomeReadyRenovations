import React from 'react'
import Logo from '../../assets/Logo.png'
import woodGrain from '../../assets/woodGrain-unsplash.jpg'
import './DesktopHeader.css'

const DesktopHeader = ()=>{
    const logoContainerStyles = {
        backgroundImage:`URL(${woodGrain})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    }

    return(
        <header className='--header-elem'>
            <div className='--header-sticky-container flex flex-align-center'>
                <div className='--header-logo-container desktop flex flex-align-center' style={logoContainerStyles}>
                    <img id='header-logo' className='--header-logo' src={Logo} alt="" />
                    <ul className='--header-nav-ul desktop flex'>
                        <a className='link desktop' href='#home'><li>Home</li></a>
                        <a className='link desktop' href='#AboutUs'><li>About Us</li></a>
                        <a className='link desktop' href='#OurWork'><li>Our Work</li></a>
                        <a className='link desktop' href='#Feedback'><li>Feedback</li></a>
                    </ul>
                </div>
                
            </div>
        </header>
    )
}

export default DesktopHeader