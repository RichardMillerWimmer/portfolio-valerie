import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.scss';
import { NextPage } from 'next';

const About: NextPage = () => {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.boxshadow}>
                <h2 className={styles.aboutHeader}>About</h2>
                <div className={styles.contentBox}>
                    <div className={styles.imageBox}>
                        <Image src='/Miller_Valerie_Headshot.png' alt='Valerie Miller Head Shot' layout='fill' />
                    </div>
                    <article className={styles.aboutArticle}>
                        <p>I am an occupational therapist with a recognized specialty in Pediatrics from the National Board for the Certification of Occupational Therapy.</p>
                        <br />
                        <p>Currently, I am a Ph.D. Candidate in Rehabilitation Sciences at the University of Kentucky. My research focuses on increasing community inclusion for individuals with intellectual and developmental disabilities.</p>
                        <br />
                        <p>As an occupational therapist, my career has taken me to a variety of pediatric settings, including Cincinnati Children’s Hospital, where I completed an American Occupational Therapy Association Fellowship in pediatrics and graduated from the Leadership Education in Neurodevelopmental and Related Disabilities (LEND) program.  recent project I loved contributing to as a collaborator was the “Access for All” Project at the Cincinnati Zoo which, aims to make their experience more accessible to individuals with disabilities and their families.</p>
                        <br />
                        <p>I am currently on faculty in the Master of Occupational Therapy Program at the University of Cincinnati.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About
