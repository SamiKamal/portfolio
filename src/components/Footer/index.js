import React from 'react'
import { GitHub, Twitter } from 'react-feather'
import styled from 'styled-components'
import { QUERIES } from '../../util/constants'

function Footer() {
    return (
        <Wrapper>
            <TextWrapper>
              &copy;  Sami Ibrahim {new Date().getFullYear()}
            </TextWrapper>
            <IconsWrapper>
                <IconInnerWrapper>
                    <IconButton target="_blank" href="https://github.com/SamiKamal">
                        <GitHub/>
                    </IconButton>
                    <IconButton target="_blank" href="https://twitter.com/Samii_Dev">
                        <Twitter/>
                    </IconButton>
                </IconInnerWrapper>
                <MailButton target="_blank" href="mailto:me@samii.dev">
                    me@samii.dev
                </MailButton>

            </IconsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    color: var(--color-grey-text-secondary);
    text-transform: uppercase;
    background: var(--color-background-secondary);
    margin-left: calc(var(--website-gap) * -1);
    margin-right: calc(var(--website-gap) * -1);
    padding: 16px 64px;
    gap: 0 32px;
    display: flex;
    justify-content: space-between;

    @media ${QUERIES.phoneAndSmaller} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`

const TextWrapper = styled.p`
`

const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media ${QUERIES.phoneAndSmaller} {
        flex-direction: column;
        margin-top: 32px;
    }

`

const IconButton = styled.a`
    color: inherit;
    margin-right: 16px;    

    & > *:hover {
        filter: brightness(1.3);
    }
`

const IconInnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
`

const MailButton = styled(IconButton)`
    text-transform: initial;

    @media ${QUERIES.phoneAndSmaller} {
        margin-top: 16px;
    }

`

export default Footer
