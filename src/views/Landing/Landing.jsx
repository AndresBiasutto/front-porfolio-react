import React from 'react'
import styles from "./Landing.module.css"
import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Nav/Nav'
import About from '../../components/About/About'
import Porfolio from '../../components/Porfolio/Porfolio'
import Contact from '../../components/Contact/Contact'

const Landing = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <About />
      <Porfolio />
      <Contact />
    </div>




  )
}

export default Landing