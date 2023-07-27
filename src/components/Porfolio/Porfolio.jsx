import React from 'react'
import styles from "./Porfolio.module.css"
import thisProject from "../../assets/portadaPorfolio.jpg"
import dogsApi from "../../assets/portadaDogs.png"
import sml from "../../assets/portadasml.jpg"
import { TbBrandGithub } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";

const Porfolio = () => {
  const isMobileSize = window.innerWidth <= 768;
  return (
    <div id='porfolio' className={styles.container} >
      <div className={styles.cardsContainer}>
        <h2>Some of my work</h2>
        <div className={styles.cardSlide}>

          <a href="#" target='_blank' className={`${isMobileSize? styles.cardMobile: styles.card}` }>
            <img className={styles.image} src={thisProject} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>This portfolio</h3>
              <p className={styles.objetive}>Personal project</p>
              <p className={styles.description}>Design and develop my personal landing page </p>
              <ul className={styles.tecList}>
                <li className={styles.objetive}>technologies:</li>
                <li className={styles.tec}>React.js</li>
                <li className={styles.tec}>Redux.js</li>
                <li className={styles.tec}>Node.js</li>
                <li className={styles.tec}>Express.js</li>
                <li className={styles.tec}>MongoDB.js</li>
              </ul>
              <div className={styles.buttonPannel}>
              <a className={styles.gitButton} target='_blank' href="#"><FiExternalLink /></a>
                <a className={styles.gitButton} target='_blank' href="https://github.com/AndresBiasutto/porfolio/tree/main/client"><TbBrandGithub /></a>
              </div>
            </div>
          </a>

          <a href="https://main--darling-pixie-1046a3.netlify.app/" target='_blank' className={`${isMobileSize? styles.cardMobile: styles.card}` }>

            <img className={styles.image} src={dogsApi} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>Henry Dogs</h3>
              <p className={styles.objetive}>Academic project</p>
              <p className={styles.description}>Design and develop a dog app that includes: authentication, searches, combined filters, and sorting. </p>
              <ul className={styles.tecList}>
                <li className={styles.objetive}>technologies:</li>
                <li className={styles.description}>React.js</li>
                <li className={styles.description}>Redux.js</li>
                <li className={styles.description}>Node.js</li>
                <li className={styles.description}>SQL</li>
              </ul>
              <div className={styles.buttonPannel}>
                <a className={styles.gitButton} target='_blank' href="https://main--darling-pixie-1046a3.netlify.app/"><FiExternalLink /></a>
                <a className={styles.gitButton} target='_blank' href="https://github.com/AndresBiasutto/PI-DOGS-MAIN"><TbBrandGithub /></a>
              </div>
            </div>

          </a>

          <a href="https://sml-app.vercel.app/sign-in?redirect_url=%2Fprotected" target='_blank' className={`${isMobileSize? styles.cardMobile: styles.card}` }>

            <img className={styles.image} src={sml} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>Social Media Lab</h3>
              <p className={styles.objetive}>Professional project</p>
              <p className={styles.description}>I developed the system of roles, Authorization, and Authentication </p>
              <ul className={styles.tecList}>
                <li className={styles.objetive}>technologies:</li>
                <li className={styles.description}>React.js</li>
                <li className={styles.description}>Redux.js</li>
                <li className={styles.description}>Node.js</li>
                <li className={styles.description}>Express.js</li>
                <li className={styles.description}>MongoDB.js</li>
              </ul>
              <div className={styles.buttonPannel}>
                <a className={styles.gitButton} target='_blank' href="https://sml-app.vercel.app/sign-in?redirect_url=%2Fprotected"><FiExternalLink /></a>
                <a className={styles.gitButton} target='_blank' href="https://github.com/Smlappadm/sml-app/tree/develop-andres-2"><TbBrandGithub /></a>
              </div>
            </div>

          </a>
        </div>

      </div>

    </div>
  )
}

export default Porfolio