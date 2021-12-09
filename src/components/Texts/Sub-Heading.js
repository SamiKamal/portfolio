import React from 'react'
import styled from 'styled-components'

function SubHeading({children, symbol}, ...props) {
    return (
        <Heading symbol={symbol} {...props}>
            {children}
        </Heading>
    )
}

const Heading = styled.h2`
    font-family: var(--font-secondary);
    font-size: ${36 / 16}rem;
    letter-spacing: 2px;
    color: var(--color-grey-text-secondary);
    font-weight: normal;

    &::after{
        content: "${p => p.symbol}";
        color: var(--color-secondary);
    }
`

export default SubHeading
