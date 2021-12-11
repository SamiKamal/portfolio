import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Wrapper>
            <TextWrapper>
              &copy;  Sami Ibrahim {new Date().getFullYear()}
            </TextWrapper>
            <IconsWrapper>

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
`

const TextWrapper = styled.p`
`

const IconsWrapper = styled.div`
`

export default Footer
