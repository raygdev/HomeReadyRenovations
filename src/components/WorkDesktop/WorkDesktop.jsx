import React from 'react'
import { Link } from 'react-router-dom'
import { getClass } from '../../utils/getClass.js'
import './WorkDesktop.css'
import placeholder from '../../assets/placeholder.jpg'

const WorkDesktop = ()=>{
    return(
        <section className='--work-photos desktop'>                  
            <div className={`${getClass(1)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>
            </div>
            <div className={`${getClass(2)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link> 
            </div>
            <div className={`${getClass(7)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>    
            </div>
            <div className={`${getClass(6)} image-container`}>
            <   Link><img src={placeholder} className='image-grid' alt="" /></Link>  
            </div>
            <div className={`${getClass(5)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>   
            </div>
            <div className={`${getClass(4)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>     
            </div>
            <div className={`${getClass(3)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>   
            </div>
            <div className={`${getClass(2)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>          
            </div>
            <div className={`${getClass(2)} image-container`}>
                <Link><img src={placeholder} className='image-grid' alt="" /></Link>            
            </div>
        </section>
    )
}

export default WorkDesktop;