import Link from 'next/link'
import styles from '../styles/Redirect.module.scss'

const Redirect = () => {
    return (
        <div className={styles.submitted}>
            <h4>Thank you, <br /> I will be in contact with you as soon as I can.</h4>
            <h4 className={styles.redirect}>Redirecting to <Link href='/'><a className='inTextLink bounce'>Home</a></Link>...</h4>
        </div>
    )
}

export default Redirect