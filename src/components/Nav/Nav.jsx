import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';
import { useState } from 'react';
import About from '../About/About';

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav_logo">{"AB"} </div>
        <div className={`nav_items ${isMenuOpen && "open"}`}>
          <Link
            to="hero"
            smooth={true}
            duration={700}
            onClick={handleMenuToggle}
          >
            home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            onClick={handleMenuToggle}
          >
            about
          </Link>
          <Link
            to="porfolio"
            smooth={true}
            duration={700}
            onClick={handleMenuToggle}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            onClick={handleMenuToggle}
          >
            Contact
          </Link>
        </div>
        <div className={`nav_toggle ${isMenuOpen && "open"}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Nav


        // <div className={styles.navContainer}>
        //   <h1>logo</h1>
        //   <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        //     <a href="">Home</a>
        //     <a href="">About</a>
        //     <a href="">Portfolio</a>
        //     <a href="">Contact</a>
        //   </nav>
        //   <button className={styles.menuButton} onClick={handleMenuToggle}>
        //     <span className={styles.menuIcon}></span>
        //   </button>
        // </div>