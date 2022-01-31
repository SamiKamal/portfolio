/* eslint-disable react/no-unescaped-entities */
import React, { useLayoutEffect } from "react";
import BlogWrapper from "../components/BlogWrapper";
import Heading from "../components/Texts/Heading";
import ImageBlog from "../components/ImageBlog";
import Paragraph from "../components/Texts/Paragraph";
import Challenge1 from "../images/RC-Challenge-1.png";
import { List, ListItem } from "../components/Texts/List";
import { StackItem, StackList } from "../components/WorkCard";
import SubHeading from "../components/Texts/Sub-Heading";

function ReactCommerce() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogWrapper>
      <Heading>Introduction</Heading>
      <Paragraph>
        "
        <a target="_blank" href="https://react-commercee.netlify.app/" rel="noreferrer">
          React Commerce
        </a>
        " is an e-commerce website built using:
        <StackList>
          <StackItem>React</StackItem>
          <StackItem>Redux</StackItem>
        </StackList>
        And it has the following features:
        <List>
          <ListItem>
            User <strong>authentication.</strong>
          </ListItem>
          <ListItem>
            Add products to <strong>the cart</strong>
          </ListItem>
          <ListItem>
            Proceed to <strong>checkout</strong> and <strong>pay.</strong>
          </ListItem>
          <ListItem>
            <strong>Search</strong> functionality.
          </ListItem>
          <ListItem>
            <strong>Filter</strong> products.
          </ListItem>
          <ListItem>
            Basic <strong>Storage Management.</strong>
          </ListItem>
        </List>
      </Paragraph>
      <Heading>Why?</Heading>
      <Paragraph>
        The website's initial idea was from a tutorial project, but what I did was to get the
        starter files for the project and build it on my own without any help from the tutorial
        video, and to make it even more challenging, I decided to use Redux as the State Management
        tool to make it harder for me (at that time I was learning Redux).
      </Paragraph>
      <Heading>Challenges I faced</Heading>
      <Paragraph>
        Well, now let's talk about the challenges I faced, and to be honest, it's only one
        challenge, but it's was quite hard for me at that time and I learned a new important concept
        from it.
      </Paragraph>
      <SubHeading symbol="//">Filtering system</SubHeading>
      <Paragraph>
        There's a filter system to filter the products by price, category, color, etc. So the
        problem I faced was that when the user applies a filter the products that don't match the
        filter will get deleted, which means the user has no way of returning to the original state
        of the products. A solution I thought of was to re-fetch the products from the API every
        time the user applies a filter, but this meant a lot of requests to the API which will cost
        a lot. So, while searching for a solution I came across a new concept called "immutability"
        which is basically that an object is never updated but copied before changing it, and that
        was it, all I had to do was to save the original products array, and when the user applies a
        filter I'll generate a new products array based on the original one, without touching the
        original array. It was an interesting solution to solve and the concept of "immutability"
        had served me a lot since then.
      </Paragraph>
      <ImageBlog alt="Code example" src={Challenge1}>
        Code example showing the InitialState variable
      </ImageBlog>
      <Heading>Leassons learned</Heading>
      <List>
        <ListItem>Immutability</ListItem>
        <ListItem>the benifits of using a State Management library like Redux.</ListItem>
      </List>
    </BlogWrapper>
  );
}

export default ReactCommerce;
