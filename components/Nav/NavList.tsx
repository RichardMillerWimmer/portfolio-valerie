import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import styles from '../../styles/NavList.module.scss';

type StyledUIType = {
    open: boolean
}

const Ul = styled.ul<StyledUIType>`
z-index: 1;
list-style: none;
display: flex;
flex-flow: row nowrap;
justify-content: center;
li {
    text-align: center;
    padding: 18px 10px;
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3d3d3d;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        color: #fff;
    }    
}
`;

interface NavProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavList: React.FC<NavProps> = ({ open, setOpen }: NavProps) => {
    const router = useRouter();
    // console.log(router)

    return (
        <Ul open={open}>
            <li className={router.pathname === "/" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/' ><a>Home</a></Link></li>
            <li className={router.pathname === "/projects" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/projects'><a>Projects</a></Link></li>
            <li className={router.pathname === "/about" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/about'><a>About</a></Link></li>
            <li className={router.pathname === "/cv" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/cv'><a>CV</a></Link></li>
            <li className={router.pathname === "/contact" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/contact'><a>Contact</a></Link></li>
        </Ul>
    )
}

export default NavList
