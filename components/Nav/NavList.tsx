import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
li {
    padding: 18px 10px;
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3d3d3d;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 120px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        color: #fff;
    }    
}
`;

interface NavProps {
    open: boolean
}

const NavList: React.FC<NavProps> = ({ open }: NavProps) => {
    return (
        <Ul open={open}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/cv'>CV</Link></li>
            <li><Link href='/work'>Work</Link></li>
        </Ul>
    )
}

export default NavList
