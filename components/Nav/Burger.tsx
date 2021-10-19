import React, {useState} from 'react';
import styled from 'styled-components';
import NavList from './NavList';

const StyledBurger = styled.div`
background-color: #3d3d3d;
width: 2rem;
height: 2rem;
position: fixed;
bottom: 15px;
left: 50%;
transform: translate(-50%, 0);
z-index: 20;
display: none;
@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ open }) => open ? '#ccc' : '#333'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg) scale(1.05, 1)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg) scale(1.05, 1)' : 'rotate(0)'};
  }
}
`

const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <NavList open={open} setOpen={setOpen}/>
        </>
    )
}

export default Burger
