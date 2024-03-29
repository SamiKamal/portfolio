import React from "react";
import styled from "styled-components";

function ImageBlog({ src, alt, children }) {
  return (
    <Figure>
      <Image src={src} alt={alt} />
      <FigCap>{children}</FigCap>
    </Figure>
  );
}

const Figure = styled.figure`
  padding-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const FigCap = styled.figcaption`
  text-align: center;
  color: var(--color-grey-text-hover);
  font-size: ${14 / 16}rem;
  padding: 16px;
`;

export default ImageBlog;
