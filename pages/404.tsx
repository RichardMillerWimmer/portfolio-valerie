import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/NotFound.module.scss'

const NotFound: NextPage = () => {
    const router: NextRouter = useRouter()

    useEffect((): void => {
        setTimeout((): void => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div className='not-found'>
            <h2>404</h2>
            <h3>That page cannot be found</h3>
            <h4 className={styles.redirect}>Redirecting to <Link href='/'><a className='inTextLink bounce'>Home</a></Link>...</h4>
        </div>
    )
}

export default NotFound