import React from 'react'
import Footer from './Footer';
import Link from 'next/link';

import Meta from './Meta';
import Nav from './Nav/Nav';

import styles from '../styles/Layout.module.scss';

const Layout: React.FC = (props) => {
    const layoutMeta = { title: 'Vals Page', keywords: 'Occupational Therapist, OT, Autism', description: '' }

    return (
        <>
            <Meta {...layoutMeta} />
            <div className={styles.layoutContainer}>
                <div className={styles.mainContentWrapper}>
                    <Link href='#mainContent'><a className={styles.hiddenLink}>skip navigation</a></Link>
                    <Nav />
                    <main>
                        {props.children}
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
