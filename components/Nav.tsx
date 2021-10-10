import React from 'react'
import Link from 'next/link'

const Nav: React.FC = () => {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='contact'>Contact</Link>
            <Link href='/cv'>CV</Link>
            <Link href='work'>Work</Link>
        </nav>
    )
}

export default Nav
