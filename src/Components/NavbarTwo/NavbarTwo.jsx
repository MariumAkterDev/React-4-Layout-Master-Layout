import React from 'react'
import { Link } from 'react-router-dom'

const NavbarTwo = () => {
  return (
    <nav>
        <div className="container">
        <div className="menuRow flex justify-around items-center">
            <div className="logo">
            <Link to="/">
                        <img src="images/logo.png" alt="logo"/>
                        <span>V-tech</span>
                    </Link>
            </div>
            <ul className='flex justify-center items-center  h-[100px] text-2xl font-bold gap-[80px]'>
                <li><Link to="/LayoutThree">Gallery</Link></li>
                <li><Link to="/LayoutThree/blog">Blog</Link></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default NavbarTwo