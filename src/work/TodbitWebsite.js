/* eslint-disable react/no-unescaped-entities */
import React, { useLayoutEffect } from "react";
import BlogWrapper from "../components/BlogWrapper";
import Heading from "../components/Texts/Heading";
import { List, ListItem } from "../components/Texts/List";
import Paragraph from "../components/Texts/Paragraph";
import { StackItem, StackList } from "../components/WorkCard";

function TodbitWebsite() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogWrapper>
      <Heading>Introduction</Heading>
      <Paragraph>
        "
        <a href="https://to-do-app-3967f.web.app/" target="_blank" rel="noreferrer">
          Todbit
        </a>
        " is a website to orgnize your projects and tasks. The website is built using:
        <StackList>
          <StackItem>Vanilla Javascript</StackItem>
          <StackItem>Firebase</StackItem>
          <StackItem>Google Cloud Integration</StackItem>
        </StackList>
        And it has the following features:
        <List>
          <ListItem>
            User <strong>authentication</strong> (Log in with Google).
          </ListItem>
          <ListItem>
            User can add and delete <strong>tasks</strong>.
          </ListItem>
          <ListItem>
            User can add and delete <strong>projects</strong>.
          </ListItem>
          <ListItem>
            User can <strong>assign</strong> and move tasks to projects.
          </ListItem>
          <ListItem>
            User can <strong>add comments</strong> to tasks.
          </ListItem>
          <ListItem>
            Store tasks and projects <strong>in the cloud</strong> with firebase (for those who
            logged in).
          </ListItem>
          <ListItem>
            Store tasks and projects <strong>in local storage</strong> (for guests).
          </ListItem>
        </List>
      </Paragraph>
    </BlogWrapper>
  );
}

export default TodbitWebsite;
