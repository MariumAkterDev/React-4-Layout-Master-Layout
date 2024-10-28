import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarTwo from '../NavbarTwo/NavbarTwo'

const LayoutThree = () => {
  return (
    <>
        <NavbarTwo/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutThree