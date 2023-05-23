import React from 'react'
import placeholder from '../../assets/placeholder.jpg'
import './Jumbo.css'

const Jumbo = ()=>{
    return(
        <section className='--layout-jumbo-section'>
            <img id='jumbo-anim' className='--layout-jumbo-anim placeholder' src={placeholder} alt="" />
            <h2 className='--layout-jumbo-title'>Quality Renovations for LARGE & small Homes</h2>
            <p className='--layout-jumbo-text'>Revamp your living space with our exceptional home renovation services. We deliver functional and stylish results that increase your property value. Let's bring your vision to life!</p>
        </section>
    )
}

export default Jumbo