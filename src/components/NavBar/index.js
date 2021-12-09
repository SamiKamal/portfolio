import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoImage from '../../images/Logo.png'

function NavBar(p) {
    const location = useLocation()
    const [isActive, setIsActive] = useState(() => location.pathname.split('/')[1] || '/')

    const handleClick = e => {
        setIsActive(e.target.name)
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src={LogoImage} alt="My Personal Logo"/>
            </LogoWrapper>
            <NavList>
                <NavItem><NavLink onClick={handleClick} name="/" active={isActive} as={Link} to="/">Home</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="about" active={isActive} as={Link} to="/about">About</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="work" active={isActive}>Work</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="contact" active={isActive}>Contact</NavLink></NavItem>
            </NavList>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoWrapper = styled.div`
`

const Logo = styled.img`
    max-width: 122px;
    display: block;
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    color: var(--color-grey-text);
`

const NavItem = styled.li`
    cursor: pointer;

    &:not(:last-child){
            margin-right: 16px;
        }
`

const NavLink = styled.a`
    color: ${(p) => p.active === p.name ? 'var(--color-grey-text-hover)' : 'inherit'};
    text-decoration: none;
    transition: filter 350ms;
    
    &:hover{
        filter: brightness(1.3);
    }
`

export default NavBar
