import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'

const Hero = () => {
    return (
        <section>
            <div className={styles.heroContainer}>
                <Image src='/Val_Iceland.jpeg' width='2048' height='1356' alt='Valerie in Iceland' />
                <div className={styles.heroTextBox}>
                    <h1>Valerie Miller</h1>
                    <h3>Ph.D. OTR-L</h3>
                </div>
            </div>
        </section>
    )
}

export default Hero
