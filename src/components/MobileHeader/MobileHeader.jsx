import React, {useEffect, useState} from 'react'
import Logo from '../../assets/Logo.png'
import woodGrain from '../../assets/woodGrain-unsplash.jpg'
import {BsList} from 'react-icons/bs'
import './MobileHeader.css'

const logoContainerStyles = {
    backgroundImage:`URL(${woodGrain})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
}

const MobileHeader = ()=>{
    const [navCollapsed, setNavCollapsed] = useState(true)

    function handleCollapse(){
        setNavCollapsed(prevCollapse=>{
            return !prevCollapse
        })
    }

    return(
        <header className='--header-elem'>
            <div className='--header-sticky-container flex flex-align-center'>
                <div className='--header-logo-container mobile' style={logoContainerStyles}>
                    <img className='--header-logo' src={Logo} alt="" />
                </div>
                <BsList className='--header-list-icon' onClick={handleCollapse}/>          
            </div>
            {!navCollapsed && (<nav id='--header-nav' className='--header-nav flex'>
                <ul className='--header-nav-ul flex'>
                    <a className='link mobile' href='#home'><li>Home</li></a>
                    <a className='link mobile' href='#AboutUs'><li>About Us</li></a>
                    <a className='link mobile' href='#OurWork'><li>Our Work</li></a>
                    <a className='link mobile' href='#Feedback'><li>Feedback</li></a>
                </ul>
            </nav>)}
        </header>
    )
}

export default MobileHeader;