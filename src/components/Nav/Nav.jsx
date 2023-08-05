import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';


const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar ${showNavBar ? 'visible' : 'hidden'}`}>
        <div className="nav_logo">Andres Biasutto</div>
        <div className={`nav_items ${isMenuOpen && "open"}`}>
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            onClick={handleMenuToggle}
          >
            home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={handleMenuToggle}
          >
            about
          </Link>
          <Link
            to="porfolio"
            smooth={true}
            duration={1000}
            onClick={handleMenuToggle}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
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