import React from "react";
import { GitHub, Twitter } from "react-feather";
import styled from "styled-components";
import { QUERIES } from "../../util/constants";
import VisuallyHidden from "../../util/VisuallyHidden";

function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <TextWrapper>&copy; Sami Ibrahim {new Date().getFullYear()}</TextWrapper>
        <IconsWrapper>
          <IconInnerWrapper>
            <IconButton target="_blank" href="https://github.com/SamiKamal">
              <GitHub />
              <VisuallyHidden>Github Link Button</VisuallyHidden>
            </IconButton>
            <IconButton target="_blank" href="https://twitter.com/Samii_Dev">
              <Twitter />
              <VisuallyHidden>Twitter Link Button</VisuallyHidden>
            </IconButton>
          </IconInnerWrapper>
          <MailButton target="_blank" href="mailto:me@samii.dev">
            me@samii.dev
          </MailButton>
        </IconsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  color: var(--color-grey-text-secondary);
  text-transform: uppercase;
  background: var(--color-background-secondary);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-height);

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const InnerWrapper = styled.div`
  padding: 16px 64px;
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  padding-right: var(--website-gap);
  padding-left: var(--website-gap);
  margin: 0 auto;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrapper = styled.p``;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    margin-top: 32px;
  }
`;

const IconButton = styled.a`
  color: inherit;
  margin-right: 16px;

  & > *:hover {
    filter: brightness(1.3);
  }
`;

const IconInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const MailButton = styled(IconButton)`
  text-transform: initial;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 16px;
  }
`;

export default Footer;
