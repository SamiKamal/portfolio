import React from 'react'
import styled from 'styled-components'
import { Parag } from '../Texts/Paragraph'

function BlogWrapper({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.article`
    margin: 0 auto;
    max-width: 763px;
    padding-bottom: 32px;

    ${Parag}{
        padding-bottom: 22px;
    }
`

export default BlogWrapper
