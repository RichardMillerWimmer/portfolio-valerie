import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'

const Hero: React.FC = () => {
    return (
        <section>
            <div className={styles.heroContainer}>
                <Image src='/Val_Iceland.jpeg' width='2048' height='1356' alt='Valerie in Iceland' />
                <header className={styles.heroTextBox}>
                    <h1>Valerie Miller</h1>
                    <h3>Ph.D. OTR-L</h3>
                </header>
            </div>
        </section>
    )
}

export default Hero
