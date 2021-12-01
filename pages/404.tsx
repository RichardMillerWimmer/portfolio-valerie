import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { useEffect } from 'react'

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
            <p>Redirecting to the <Link href='/'><a>Homepage</a></Link>...</p>
        </div>
    )
}

export default NotFound