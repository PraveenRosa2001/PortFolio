import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className="dekstopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="dekstopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="dekstopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="dekstopMenuListItem">Clients</Link>
        </div>
        <button className="dekstopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="dekstopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
