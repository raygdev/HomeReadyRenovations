import React from 'react'
import { Link } from 'react-router-dom'
import './WorkDesktop.css'
import placeholder from '../../assets/placeholder.jpg'

const WorkDesktop = ()=>{
    return(
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
    )
}

export default WorkDesktop;