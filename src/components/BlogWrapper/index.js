import React from 'react'
import styled from 'styled-components'

function BlogWrapper({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.article`
    max-width: 763px;
`

export default BlogWrapper
