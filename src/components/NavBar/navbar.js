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
            <Link className="dekstopMenuListItem">Home</Link>
            <Link className="dekstopMenuListItem">About</Link>
            <Link className="dekstopMenuListItem">Portfolio</Link>
            <Link className="dekstopMenuListItem">Clients</Link>
        </div>
        <button className="dekstopMenuBtn">
            <img src={contactImg} alt="" className="dekstopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
