import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import { animated } from "react-spring";

function Modal({ children, isOpen, onDismiss, label, styleContent = {}, ...props }) {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss} {...props}>
      <Content style={styleContent} aria-label={label ? label : "alert"}>
        {children}
      </Content>
    </Overlay>
  );
}

const Overlay = styled(animated(DialogOverlay))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-height: 100vh;
  width: 100vw;
  background: hsla(0 0% 0% / 0.5);
`;

const Content = styled(animated(DialogContent))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 80vw;
  padding: 16px;
  background-color: var(--color-background-secondary);
`;

export default Modal;
