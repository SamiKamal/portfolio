import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Heading from '../../components/Texts/Heading'
import Paragraph from '../../components/Texts/Paragraph'
import SubHeading from '../../components/Texts/Sub-Heading'
import SkullImage from '../../images/Hero main-image.png'
import BackgroundImage from '../../images/Hero background-image.png'
import {Fly} from '../../util/constants'
import { GitHub } from 'react-feather'
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
                    summary="It’s a website that allow users to search and report hackers they meet in video games"
                    readMoreLink="/"
                    visitLink="/"
                    githubLink="/"
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
    margin-right: -64px;
    padding-bottom: 64px;
`

const TextWrapper = styled.div`
    flex: 4;
`

const InnerTextWrapper = styled.div`
    --gap: 80px;
    padding-left: var(--gap);
    max-width: calc(660px + var(--gap));
`

const ImageWrapper = styled.div`
    flex: 3;
    flex-shrink: 3;
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
`

export default HomePage
