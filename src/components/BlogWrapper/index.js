import React from 'react'
import styled from 'styled-components'
import {HeadingText} from '../Texts/Heading'
import {Heading} from '../Texts/Sub-Heading'
import { Parag } from '../Texts/Paragraph'
import { StackList } from '../WorkCard'

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

    ${HeadingText}{
        padding-top: 32px;
    }

    ${Heading}{
        padding-top: 16px;
    }

    ${StackList}{
        margin: 16px 0;
    }
`

export default BlogWrapper
