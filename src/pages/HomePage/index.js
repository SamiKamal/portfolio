import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Heading from '../../components/Texts/Heading'
import Paragraph from '../../components/Texts/Paragraph'
import SubHeading from '../../components/Texts/Sub-Heading'
import SkullImage from '../../images/Hero main-image.png'
import didimeetahackerCover from '../../images/didimeetahacker-cover.png'
import reactcommerceCover from '../../images/react-commerce-cover.png'
import BackgroundImage from '../../images/Hero background-image.png'
import {Fly, QUERIES} from '../../util/constants'
import WorkCard from '../../components/WorkCard'

function HomePage() {
    return (
        <>
            <HeroWrapper>
                <TextWrapper>
                    <Heading>Sami Ibrahim</Heading>
                    <InnerTextWrapper>
                        <SubHeading symbol="//">Front-end web developer</SubHeading>
                        <Paragraph>
                        Hi, My Name is Sami Ibrahim And I’m a React Front-End Developer Who is Based in Saudi Arabia. 
                        I Have 2 Years of Experience in Coding, You Can <a href="#work">CHECK MY PROJECTS DOWN BELOW</a>, or <Link to="/about">READ MORE ABOUT ME</Link>
                        </Paragraph>
                    </InnerTextWrapper>
                </TextWrapper>
                <ImageWrapper>
                    <Image src={SkullImage}/>
                </ImageWrapper>
            </HeroWrapper>

            <WorkWrapper id="work">
                <Heading>Work</Heading>
                <InnerTextWrapper>
                    <SubHeading symbol="?">Latest work</SubHeading>
                </InnerTextWrapper>
                <WorkList>
                    <WorkCard
                    title="Did I meet a hacker"
                    summary="It’s a website that allow users to search and report hackers they meet in video games."
                    readMoreLink="/"
                    visitLink="https://didimeetahacker.vercel.app/"
                    githubLink="/"
                    src={didimeetahackerCover}
                    />

                    <WorkCard
                    title="React Commerce"
                    summary="a website where you can buy furniture for your home."
                    readMoreLink="/"
                    visitLink="https://react-commercee.netlify.app/"
                    githubLink="https://github.com/SamiKamal/React-commerce"
                    src={reactcommerceCover}
                    />
                </WorkList>
            </WorkWrapper>
        </>
    )
}

const HeroWrapper = styled.section`
    display: flex;
    align-items: center;
    background-image: url("${BackgroundImage}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    margin-right: calc(var(--website-gap) * -1);
    padding-bottom: 64px;

    @media ${QUERIES.tabletAndSmaller} {
        padding-top: 128px;
    }

`

const TextWrapper = styled.div`
    flex: 4;
    margin-right: var(--website-gap);

    @media ${QUERIES.laptopAndSmaller} {
        flex: 5;
    }
`

const InnerTextWrapper = styled.div`
    --gap: 80px;
    padding-left: var(--gap);
    max-width: calc(660px + var(--gap));

    @media ${QUERIES.tabletAndSmaller} {
        --gap: 32px;
    }

`

const ImageWrapper = styled.div`
    flex: 3;
    flex-shrink: 3;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }

`

const Image = styled.img`
    transform: translateY(-10%);
    animation: ${Fly} 5s infinite alternate ease-in-out;
    pointer-events: none;
`

const WorkWrapper = styled.section`
    padding: 64px 0;
`

const WorkList = styled.div`
    display: grid;
    padding-top: 128px;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 64px 256px;
`

export default HomePage
