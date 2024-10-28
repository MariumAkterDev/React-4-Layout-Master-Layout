import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footerimg">
        <Link className='footerlogo' to="/"><img src="images/logo.png" alt="logo"/></Link>
        <div className='footericon'>
          <Link to=""><img src="images/facebook.png" alt="" /></Link>
          <Link to=""><img src="images/linkedin.png" alt="" /></Link>
          <Link to=""><img src="images/twitter.png"  alt="" /></Link>
          <Link target='_blank' to="https://github.com/MariumAkterDev"><img src="images/code.png" alt="" /></Link>
        </div>
      </div>
      <div className='footerRowTwo'>
        <h1>Services</h1>
        <div className='footerMenu'>
          <Link to="/LayoutTwo" >HTML</Link>
          <Link to="/LayoutTwo" >CSS</Link>
          <Link to="/LayoutTwo" >JavaScript</Link>
          <Link to="/LayoutTwo" >React</Link>
        </div>
      </div>
      <div className='footerRowThree'>
        <h1>Let's Talk</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur sed atque libero quae numquam
           soluta harum, sequi deserunt autem.
        </p>
        <button>Tell us about your Project</button>
      </div>
    </footer>
  ) 
}

export default Footer