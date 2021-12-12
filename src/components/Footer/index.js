import React from 'react'
import { GitHub, Twitter } from 'react-feather'
import styled from 'styled-components'

function Footer() {
    return (
        <Wrapper>
            <TextWrapper>
              &copy;  Sami Ibrahim {new Date().getFullYear()}
            </TextWrapper>
            <IconsWrapper>
                <IconButton href="https://github.com/SamiKamal">
                    <GitHub/>
                </IconButton>
                <IconButton href="https://twitter.com/Samii_Dev">
                    <Twitter/>
                </IconButton>

            </IconsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    color: var(--color-grey-text-secondary);
    text-transform: uppercase;
    background: var(--color-background-secondary);
    margin-left: -64px;
    margin-right: -64px;
    padding: 16px 64px;
    display: flex;
    justify-content: space-between;
`

const TextWrapper = styled.p`
`

const IconsWrapper = styled.div`
    display: flex;
`

const IconButton = styled.a`
    color: inherit;

    &:not(:last-child) {
        margin-right: 16px;    
    }

    & > *:hover {
        filter: brightness(1.3);
    }
`

export default Footer
