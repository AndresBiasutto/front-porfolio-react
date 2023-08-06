import React from 'react'
import styles from "./About.module.css"

import { useState, useEffect } from 'react';
import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';

const About = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={styles.container}>
            {isMobile ? <AboutMobile/> : <AboutDesktop/>}
        </div>
    )
}

export default About