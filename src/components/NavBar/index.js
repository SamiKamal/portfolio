import { DialogContent, DialogOverlay } from '@reach/dialog'
import React, {useState, useEffect} from 'react'
import { Menu, X } from 'react-feather'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoImage from '../../images/Logo.png'
import { QUERIES } from '../../util/constants'
import { animated, useTransition } from 'react-spring'


function NavBar(p) {
    const location = useLocation()
    const [isActive, setIsActive] = useState(() => location.pathname.split('/')[1] || '/')
    const [isOpen, setIsOpen] = useState(false)
    const transitions = useTransition(isOpen,{
        from: {opacity: 0, x: 100},
        enter: {opacity: 1, x: 0},
        reverse: isOpen,
        leave: {opacity: 0, x: 100}
    })

    useEffect(() => {
        if (!location.hash){
            setIsActive(() => location.pathname.split('/')[1] || '/')
        }
        
    }, [location])

    const handleClick = e => {
        setIsActive(e.target.name)
        setIsOpen(false)
    }

    return (
        <Wrapper>
            <LogoWrapper to="/">
                <Logo src={LogoImage} alt="My Personal Logo"/>
            </LogoWrapper>
            <NavList className='test'>
                <NavItem><NavLink onClick={handleClick} name="/" active={isActive} to="/">Home</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="work" as="a" href="/#work" active={isActive}>Work</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="about" active={isActive} to="/about">About</NavLink></NavItem>
                <NavItem><NavLink onClick={handleClick} name="contact" href="mailto:sami-dev@hotmail.com" as="a" active={isActive}>Contact</NavLink></NavItem>
            </NavList>
            <ButtonMenu onClick={() => setIsOpen(true)}>
                <Menu/>
            </ButtonMenu>

            {transitions((styles, item) => {
                return item && 
            (<Overlay onDismiss={() => setIsOpen(false)} dangerouslyBypassFocusLock style={{opacity: styles.opacity}}>
                <Content aria-label="Mobile Menu" style={{transform: styles.x.to(value => `translateX(${value}px)`)}}>
                    <ButtonMenu onClick={() => setIsOpen(false)}>
                        <X/>
                    </ButtonMenu>
                    <NavListMobile className='test'>
                        <NavItem><NavLink onClick={handleClick} name="/" active={isActive} to="/">Home</NavLink></NavItem>
                        <NavItem><NavLink onClick={handleClick} name="work" as="a" href="/#work" active={isActive}>Work</NavLink></NavItem>
                        <NavItem><NavLink onClick={handleClick} name="about" active={isActive} to="/about">About</NavLink></NavItem>
                        <NavItem><NavLink onClick={handleClick} name="contact" href="mailto:sami-dev@hotmail.com" as="a" active={isActive}>Contact</NavLink></NavItem>
                    </NavListMobile>
                </Content>
            </Overlay>)})}

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

    @media ${QUERIES.phoneAndSmaller}{
        display: none;
    }
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

const ButtonMenu = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: white;

    @media ${QUERIES.phoneAndSmaller} {
        display: revert;
    }

`

const Overlay = styled(animated(DialogOverlay))`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: hsla(0 0% 0% / 0.2);

    @media ${QUERIES.phoneAndSmaller}{
        display: revert;
    }

`

const Content = styled(animated(DialogContent))`
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: var(--color-background-secondary);

    & ${ButtonMenu}{
        align-self: end;
        margin-bottom: auto;
        margin-right: calc(var(--website-gap) - 16px);
        margin-top: 28px;
        padding: 20px;
    }
`

const NavListMobile = styled(NavList)`
    display: flex;
    flex-direction: column;
    padding-right: 128px;
    margin-bottom: auto;

    & > *:not(:last-child){
        margin-bottom: 32px;
    }

`


export default NavBar
