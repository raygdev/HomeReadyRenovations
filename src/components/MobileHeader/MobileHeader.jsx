import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/'><img id='header-logo' className='--header-logo' src={Logo} alt="" /></Link>
                </div>
                <BsList className='--header-list-icon' onClick={handleCollapse}/>          
            </div>
            {!navCollapsed && (<nav id='--header-nav' className='--header-nav flex'>
                <ul className='--header-nav-ul flex'>
                    <Link to='.#home' className='link mobile'><li>Home</li></Link>
                    <Link to='.#AboutUs' className='link mobile'><li>AboutUs</li></Link>
                    <Link to='.#OurWork'className='link mobile'><li>Our Work</li></Link>
                    <Link to='.#Feedback' className='link mobile'><li>Feedback</li></Link>
                </ul>
            </nav>)}
        </header>
    )
}

export default MobileHeader;