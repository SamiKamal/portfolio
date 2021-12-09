import React from 'react'
import styled from 'styled-components'

function Heading({children}, ...props) {
    return (
        <HeadingText {...props}>
            {children}
        </HeadingText>
    )
}

const HeadingText = styled.h1`
    font-size: ${96 / 16}rem;
    line-height: 0.8;
`

export default Heading
