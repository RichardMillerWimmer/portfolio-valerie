import React from 'react'
import Footer from './Footer';

import Meta from './Meta';
import Nav from './Nav/Nav';

import styles from '../styles/Layout.module.scss';

const Layout: React.FC = (props) => {
    const layoutMeta = { title: 'Vals Page', keywords: 'Occupational Therapist, OT, Autism', description: '' }

    return (
        <>
            <Meta {...layoutMeta} />
            <div className={styles.layoutContainer}>
                <Nav />
                <div className={styles.contentWrapper}>
                    {props.children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Layout
