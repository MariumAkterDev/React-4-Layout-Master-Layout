import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import SideNavbar from '../SideNavbar/SideNavbar'

const LayoutTwo = () => {
  return (
    <>
        <div className='flex justify-around items-center'>
        <SideNavbar/>
        <Outlet/>
        </div>
        <Footer/>
    </>
    
    
  )
}

export default LayoutTwo