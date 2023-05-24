import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/'><img id='header-logo' className='--header-logo' src={Logo} alt="" /></Link>
                    <ul className='--header-nav-ul desktop flex'>
                    <Link to='.' reloadDocument className='link desktop'><li>Home</li></Link>
                    <Link to='.' reloadDocument className='link desktop'><li>AboutUs</li></Link>
                    <Link to='.' reloadDocument className='link desktop'><li>Our Work</li></Link>
                    <Link to='.' reloadDocument className='link desktop'><li>Feedback</li></Link>
                    </ul>
                </div>
                
            </div>
        </header>
    )
}

export default DesktopHeader