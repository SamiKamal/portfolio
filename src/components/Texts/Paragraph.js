import React from 'react'
import styled from 'styled-components'

function Paragraph({children}, ...props) {
    return (
        <Parag {...props}>
            {children}
        </Parag>
    )
}

export const Parag = styled.p`
    
    & a {
        color: inherit;
        transition: color 250ms;

        &:hover{
            color: var(--color-secondary);
        }
    }
`

export default Paragraph
