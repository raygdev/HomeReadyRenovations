import React from 'react'
import Logo from '../../assets/Logo.png'
import './Footer.css'

const Footer = ()=>{
    return(
        <div className='--footer-container flex flex-wrap flex-center flex-align-center'>
            <p>©️2023 Home Ready Renovations</p>
            <p className='--footer-seperator'>⚪</p>
            <p>(405)473-1503</p>
            <p className='--footer-seperator'>⚪</p>
            <p>makereadyreno@gmail.com</p>
        </div>
    )
}

export default Footer;