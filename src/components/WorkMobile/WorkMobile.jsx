import React from 'react'
import { Link } from 'react-router-dom'
import './WorkMobile.css'
import placeholder from '../../assets/placeholder.jpg'

const WorkMobile = ()=>{
    return(
        <section className='--work-section-container mobile'>       
          <div className='--work-commerical-container --work-portfolio'>
            <img id='work-commercial-img' src={placeholder} className='placeholder' alt="" />
            <h2 className='center XXpt'>Commerical Renovations</h2>
            <Link className='--work-commercial-link center'>View More</Link>
          </div>
          <div className='--work-interior-container --work-portfolio'>
            <img id='work-interior-img' src={placeholder} className='placeholder' alt="" />
            <h2 className='center XXpt'>Interior Renovations</h2>
            <Link className='--work-interior-link center'>View More</Link>
          </div>
          <div className='--work-exterior-container --work-portfolio'>
            <img id='work-exterior-img' src={placeholder} className='placeholder' alt="" />
            <h2 className='center XXpt'>Exterior Renovations</h2>
            <Link className='--work-exterior-link center'>View More</Link>
          </div>
        </section>
    )
}

export default WorkMobile;