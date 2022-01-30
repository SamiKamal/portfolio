/* eslint-disable react/no-unescaped-entities */
import React, { useLayoutEffect } from "react";
import BlogWrapper from "../components/BlogWrapper";
import ImageBlog from "../components/ImageBlog";
import Heading from "../components/Texts/Heading";
import SubHeading from "../components/Texts/Sub-Heading";
import { List, ListItem } from "../components/Texts/List";
import Paragraph from "../components/Texts/Paragraph";
import { StackItem, StackList } from "../components/WorkCard";
import Challenge1 from "../images/DIMAH-Challenge-1.png";
import Challenge2 from "../images/DIMAH-Challenge-2.png";

function DidImeetahacker() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogWrapper>
      <Heading>Introduction</Heading>
      <Paragraph>
        "
        <a target="_blank" href="https://www.didimeetahacker.com/" rel="noreferrer">
          Did I meet a hacker
        </a>
        " is a website for gamers to see if there are reports on the "suspicious" player they met.
        The website is built using:
        <StackList>
          <StackItem>React</StackItem>
          <StackItem>Node.js</StackItem>
          <StackItem>Redux</StackItem>
          <StackItem>Express.js</StackItem>
          <StackItem>MongoDB</StackItem>
        </StackList>
        And it has the following features:
        <List>
          <ListItem>User authentication (Log in with Google).</ListItem>
          <ListItem>
            <strong>Validate</strong> Input
          </ListItem>
          <ListItem>
            <strong>Like & Dislike</strong> functionality.
          </ListItem>
          <ListItem>
            <strong>Search</strong> by Options or Input.
          </ListItem>
          <ListItem>
            Some <strong>functionalities are limited to authenticated </strong> users only.
          </ListItem>
        </List>
      </Paragraph>
      <Heading>Why?</Heading>
      <Paragraph>
        The website's idea started when a friend of mine mentioned that he wanted a website to
        expose the cheaters, and I combined it with my idea that sometimes I meet players and I
        wonder are they good players? or good cheaters? so the initial concept was to just allow the
        players to upload reports and see reports without any authentication, but that seemed to be
        a hassle to moderate so I decided to allow the users to see the reports, but they have to
        open an account to upload one, and also to like and dislike a report
      </Paragraph>
      <Paragraph>
        What next? I plan to add more functionalities like commenting and a dashboard for tournament
        maintainers to verify cheaters.
      </Paragraph>
      <Heading>Challenges I faced</Heading>
      <Paragraph>
        Ahh, now we talk about the challenged I encountered, I'll limit those to 3 challenges,
        though most of them are back-end related since it's not my strong suit.
      </Paragraph>
      <SubHeading symbol="//">Like & Dislike</SubHeading>
      <Paragraph>
        The like and dislike functionality was a hassle to tackle, I had to make multiple important
        decisions about how to structure the likes, for example, do I store the likes in the user
        object or the report object? how can I keep track of which user liked which report? how do I
        make sure the user won't be able to like the same report twice? all of these decisions were
        quite hard and I had to think of all the outcomes.
      </Paragraph>
      <ImageBlog src={Challenge1}>
        Code example showing the back-end side of the like & dislike functionality
      </ImageBlog>
      <Paragraph>
        And the problems didn't stop there, I had a bug where the user can like the same report
        twice if he double-clicked and this one was a nightmare, I spent 2 days just to understand
        why it happens and solve it.
      </Paragraph>
      <SubHeading symbol="//">Add teammate</SubHeading>
      <Paragraph>
        There's a feature I have when the user is filing a report where he can add the teammates of
        the cheater, and the user can add multiple teammates (max 10). The problem I had is how to
        allow the user to add more teammates inputs, and how to keep track of them, and also allow
        the user to edit the previous input and delete it, I solved it first in a complicated and
        bad way, so I decided to let it like that until I finish the rest of the website. After I
        finished the website I came back to the code and refactored it, without diving deep the
        solution was simply to create an array of objects, each object has an id and a name
        property. It was a simple solution, but because I overthought it previously I solved it in a
        complicated way.
      </Paragraph>
      <ImageBlog src={Challenge2}>
        Code example showing the functions to add and delete teammate
      </ImageBlog>
      <SubHeading symbol="//">Search functionality</SubHeading>
      <Paragraph>
        This one wasn't as hard as the previous ones but I had fun, the problem was that I wanted to
        allow the user to search for cheaters by name and by game. The first problem was to find a
        performant way to search, and it was an easy problem. The second one was to cover all the
        cases where the user can search for a name without a game, or search for the game without a
        name, or search for both at the same time, or not to search at all. I solved this simply
        with If conditions to check if the name is a falsy value or not and so on, a pretty simple
        solution.
      </Paragraph>
      <Heading>Leassons learned</Heading>
      <List>
        <ListItem>
          Don't re-invent the wheel, for example, there's a notification system on the website to
          inform the user if he logged in, or logged out, etc. And I was thinking of implementing
          the whole functionality (which would cost me 2 days maybe?), but then by mistake, I found
          a library providing the same feature I want (and more) and it cost me 1 hour at most.
        </ListItem>
        <ListItem>
          Accessibility, I focused a lot on accessibility and made the website easier for keyboard
          navigation and screen-readers.
        </ListItem>
        <ListItem>
          Usable code. I can't stress enough how it made my life easier and helped me build scalable
          code, For almost every component I wrote I made it usable which reduced the number of
          components I have without increasing the complexity of my code.
        </ListItem>
      </List>
    </BlogWrapper>
  );
}

export default DidImeetahacker;
