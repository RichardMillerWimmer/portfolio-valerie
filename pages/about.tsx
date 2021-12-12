import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.scss';
import { NextPage } from 'next';
import { client } from './index'

type AboutType = {
    about: string
}

const About: NextPage<AboutType> = ({ about }) => {
    console.log(about)
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.boxshadow}>
                <h2 className={styles.aboutHeader}>About</h2>
                <div className={styles.contentBox}>
                    <div className={styles.imageBox}>
                        <Image src='/Miller_Valerie_Headshot.png' alt='Valerie Miller Head Shot' layout='fill' />
                    </div>
                    <article className={styles.aboutArticle}>
                        {about}
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About

export async function getStaticProps() {

    const res = await client.getEntries({ content_type: 'about' })

    return {
        props: {
            about: res
        }
    }
}
