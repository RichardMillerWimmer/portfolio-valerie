import React from 'react'
import Burger from './Burger'
import styles from '../../styles/Nav.module.scss';

const Nav: React.FC = () => {
    return (
        <>
            <nav className={styles.nav}>
                <Burger />
            </nav>
        </>
    )
}

export default Nav
