import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoImage from '../../images/Logo.png'

function NavBar(p) {
    const location = useLocation()
    const [isActive, setIsActive] = useState(() => location.pathname.split('/')[1] || '/')

    useEffect(() => {
        if (!location.hash){
            setIsActive(() => location.pathname.split('/')[1] || '/')
        }
        
    }, [location])

    const handleClick = e => {
        setIsActive(e.target.name)
    }
    return (
        <Wrapper>
            <LogoWrapper to="/">
                <Logo src={LogoImage} alt="My Personal Logo"/>
            </LogoWrapper>
            <NavList className='test'>
                <NavItem><NavLink onClick={handleClick} name="/" active={isActive} to="/">Home</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="about" active={isActive} to="/about">About</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="work" as="a" href="/#work" active={isActive}>Work</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="contact" href="mailto:sami-dev@hotmail.com" as="a" active={isActive}>Contact</NavLink></NavItem>
            </NavList>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoWrapper = styled(Link)`

    &:focus{
        outline-offset: -5px;
    }
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

const NavLink = styled(Link)`
    color: ${(p) => p.active === p.name ? 'var(--color-grey-text-hover)' : 'inherit'};
    text-decoration: none;
    transition: filter 350ms;
    
    &:hover{
        filter: brightness(1.3);
    }
`

export default NavBar
