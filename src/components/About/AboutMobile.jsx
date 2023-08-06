import React from 'react'
import styles from "./About.module.css"
import { TbSql, } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoMongodb, BiLogoFigma, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiGitBranch } from "react-icons/bi"
import satelite from "../../assets/img/comunications.png"
import ciudad from "../../assets/img/cityBig.png"

const AboutMobile = () => {
  return (
    <div className={styles.neonWall}>
    <div id='about' className={styles.charts}>
        <img src={satelite} className={styles.satelite} alt="" />
        <img src={ciudad} className={styles.ciudad} alt="" />
        <div className={styles.chart}>
            <div className={styles.texts}>
                <h2 className={styles.textTitle}>About me</h2>
                <p className={styles.textText}>Motivated and versatile professional with a background in commerce and industry, now pursuing a career
                    as a Full Stack web developer. Possessing valuable soft skills such as empathy, teamwork, adaptability,
                    and a strong commitment to continuous learning.
                    I completed a one-month internship at Social Media Lab, gaining hands-on experience in front-end and
                    back-end development. A firm believer in the power of collaboration and teamwork in dynamic
                    environments. Seeking exciting opportunities to apply technical expertise and creative skills in development
                    and design to make a positive impact. Open to new challenges and eager to contribute to innovative
                    projects. Feel free to reach out for further inquiries or to explore potential collaborations.
                </p>
            </div>
        </div>
        <div className={styles.chart} style={{
            background: "#0d0908c4",
            left: `-100%`,
        }}
        >
            <div className={styles.texts}>
                <h2 className={styles.textTitle}>Skills</h2>
                <div className={styles.skillsBox}>
                    <span className={styles.skillCard}>
                        <BiLogoJavascript className={styles.skillLogo} />
                        <p className={styles.skillText} >JavaScript</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoHtml5 className={styles.skillLogo} />
                        <p className={styles.skillText} >HTML</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoCss3 className={styles.skillLogo} />
                        <p className={styles.skillText} >CSS</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoReact className={styles.skillLogo} />
                        <p className={styles.skillText} >React.js</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoRedux className={styles.skillLogo} />
                        <p className={styles.skillText} >Redux.js</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoNodejs className={styles.skillLogo} />
                        <p className={styles.skillText} >Node.js</p>
                    </span>
                    <span className={styles.skillCard}>
                        <TbSql className={styles.skillLogo} />
                        <p className={styles.skillText} >SQL</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoMongodb className={styles.skillLogo} />
                        <p className={styles.skillText} >MongoDB</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiLogoFigma className={styles.skillLogo} />
                        <p className={styles.skillText} >Figma</p>
                    </span>
                    <span className={styles.skillCard}>
                        <BiGitBranch className={styles.skillLogo} />
                        <p className={styles.skillText} >Git</p>
                    </span>
                </div>
                <div className={styles.certificatesBox}>
                    <h2>Certificates</h2>
                    <div className={styles.certificados}>
                        <a href="https://certificates.soyhenry.com/new-cert?id=ba51549c089180a45082c7ddd9ea765a8ac9a581f83293bdf5eab9ed2ca55448" target='_blank' className="button" >
                            <PiCertificate className={styles.certIco} />Full Stack web dev
                        </a>
                        <a href="https://argentinaprograma.inti.gob.ar/mod/customcert/view.php?id=2748&downloadown=1" target='_blank' className="button" >
                            <PiCertificate className={styles.certIco} />Full Stack web dev
                        </a>
                        <a href="https://www.freecodecamp.org/certification/andresbiasutto/responsive-web-design" target='_blank' className="button" >
                            <PiCertificate className={styles.certIco} />Responsive web design
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutMobile