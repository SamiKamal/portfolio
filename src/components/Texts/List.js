import React from "react";
import styled from "styled-components";

export function List({ children }) {
  return <ListWrapper>{children}</ListWrapper>;
}

export function ListItem({ children }) {
  return <ListItemWrapper>{children}</ListItemWrapper>;
}

const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 1em;
  padding-top: 8px;
`;

const ListItemWrapper = styled.li`
  &::before {
    content: "•";
    color: var(--color-secondary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
