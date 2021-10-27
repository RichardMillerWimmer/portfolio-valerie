import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.boxshadow}>
                <h2>Get to know me a little better</h2>
                <Image src='/Miller_Valerie_Headshot.png' width={250} height={375} alt='Valerie Miller' layout='responsive'/>
                <p>I am an occupational therapist with a recognized specialty in Pediatrics from the National Board for the Certification of Occupational Therapy. Currently, I am a Ph.D. Candidate in Rehabilitation Sciences at the University of Kentucky. My research focuses on increasing community inclusion for individuals with intellectual and developmental disabilities. As an occupational therapist, my career has taken me to a variety of pediatric settings, including Cincinnati Children’s Hospital, where I completed an American Occupational Therapy Association Fellowship in pediatrics and graduated from the Leadership Education in Neurodevelopmental and Related Disabilities (LEND) program. A recent project I loved contributing to as a collaborator was the “Access for All” Project at the Cincinnati Zoo which, aims to make their experience more accessible to individuals with disabilities and their families. I am now on faculty in the Master of Occupational Therapy Program at the University of Cincinnati.</p>
            </div>
        </section>
    )
}

export default About
