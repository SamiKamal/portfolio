import React from 'react'
import styled from 'styled-components'
import { QUERIES } from '../../util/constants'

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
    margin-bottom: 6px;

    @media ${QUERIES.phoneAndSmaller} {
        font-size: ${80 / 16}rem;
    }

`

export default Heading
