import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";

function Modal({ children, isOpen, onDismiss }) {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>{children}</Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(0 0% 0% / 0.5);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 80vw;
  padding: 16px;
  background-color: var(--color-background-secondary);
`;

export default Modal;
