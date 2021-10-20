import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const Ul = styled.ul`
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
    setOpen
}

const NavList: React.FC<NavProps> = ({ open, setOpen }: NavProps) => {

    return (
        <Ul open={open}>
            <li onClick={() => setOpen(!open)}><Link href='/' >Home</Link></li>
            <li onClick={() => setOpen(!open)}><Link href='/about'>About</Link></li>
            <li onClick={() => setOpen(!open)}><Link href='/contact'>Contact</Link></li>
            <li onClick={() => setOpen(!open)}><Link href='/cv'>CV</Link></li>
            <li onClick={() => setOpen(!open)}><Link href='/work'>Work</Link></li>
        </Ul>
    )
}

export default NavList
