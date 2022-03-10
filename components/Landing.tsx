import React from 'react'
import styles from '../styles/Landing.module.scss'

const Landing: React.FC = () => {

    return (
        <section id='mainContent' className={styles.boxShadow}>
            <div className={styles.mainContent}>
                <h3>Hello friends and colleagues,</h3>
                <p>Thank you for visiting. A little bit about myself, I am on faculty at the University of Cincinnati teaching in the Master of Occupational Therapy program. Early on I discovered a passion for helping people through practices in Occupation Therapy and have found a calling in teaching people how to do so. My areas of expertise include pediatrics, school-based practice, sensory processing, and community inclusion. Whether it is teaching students, practicing in the field, consulting, or conducting research I approach my pursuits with <b>heart</b>, <b>purpose</b>, and <b>conviction</b>.</p>
            </div>
        </section>
    )
}

export default Landing
