import Image from 'next/image';
import styles from '../styles/About.module.scss';
import { NextPage } from 'next';
import { client } from './index'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type AboutType = {
    about: any
}

const About: NextPage<AboutType> = ({ about }: AboutType) => {
    // console.log(about)
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.boxshadow}>
                <h2 className='visualHidden'>About</h2>
                <div className={styles.contentBox}>
                    <div className={styles.imageBox}>
                        <Image className={styles.img} src='/Miller_Valerie_Headshot.png' alt='Valerie Miller Head Shot' layout='fill' />
                    </div>
                    <article className={styles.aboutArticle}>
                        {documentToReactComponents(about.about)}
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
            about: res.items[0].fields
        }
    }
}
