import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className='mainMenu '>
            <div className="menu_row">
                <div className="logo">
                    <Link to="/">
                        <img src="images/logo.png" alt="logo"/>
                        <span>V-tech</span>
                    </Link>
                </div>
                <div className="menuItem">
                    <ul>
                        <li><Link to="/"         >Home       </Link></li>
                        <li><Link to="/about"    >About      </Link></li>
                        <li><Link to="/LayoutTwo">Services   </Link></li>
                        <li><Link to="/contact"  >Contact    </Link></li>
                        <li><Link to="/LayoutTwo/help">Help  </Link></li>
                        <li><Link to="/LayoutThree">Gallery  </Link></li>
                    </ul>
                </div>
                <div className="searchBar">
                    <input placeholder='Search here....' type="text"/>
                    <a href=""><img src="images/search.png" alt="search" /></a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar