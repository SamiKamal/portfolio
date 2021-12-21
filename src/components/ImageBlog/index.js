import React from 'react'
import {styled} from 'styled-components'
function ImageBlog({src, alt}) {
    return (
        <Figure>
            <Image src={src} alt={alt}/>
            <FigCap>

            </FigCap>
        </Figure>
    )
}

const Figure = styled.figure`
`

const Image = styled.img`
`

const FigCap = styled.figcaption`
`

export default ImageBlog
