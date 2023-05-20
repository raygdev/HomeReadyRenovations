import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import DesktopHeader from '../../components/DesktopHeader/DesktopHeader'
import { useCurrentWidth } from '../../hooks/findWidth'
import './Layout.css'


export const loader = ()=>{
  return null
}

export const Layout = ()=> {
  const width = useCurrentWidth()
  
  return(
    <>
      
      {width < 750 ? (<MobileHeader/>): (<DesktopHeader/>)}
      <aside>
        
      </aside>
      <main>

      </main>
    </>
  )
}
