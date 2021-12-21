import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../images/About-page main-image.png'
import BackgroundImage from '../../images/Hero About background-image.png'
import SubHeading from '../../components/Texts/Sub-Heading'
import Heading from '../../components/Texts/Heading'
import Paragraph, { Parag } from '../../components/Texts/Paragraph'
import { QUERIES } from '../../util/constants'

function AboutPage() {
    return (
        <>
            <HeroWrapper>
                <TextWrapper>
                    <Heading>Whoami</Heading>
                    <InnerTextWrapper>
                        <SubHeading symbol="//">My Story</SubHeading>
                        <Paragraph>
                        Hey, there I’m Sami Ibrahim, a self-taught web developer.
                        My interest in computers began since I was 6 years old when my dad was bringing me to his office to use a computer that no one uses,
                        from there on I was fascinated I started learning the basics of computers and used it almost every day since then. At home,
                        I have managed to fix computer problems that occurred to my family that are marked as unfixable by professionals IT technicians (yeah, I was that techy guy).
                        I learned a lot of things from video editing to graphic designing. But when I was 16 years old, I started learning programming,
                        and how much do I regret not starting that earlier. From the moment I produced "Hello World" in the console of my first application,
                        I knew I was hooked into the world of web development. programming offered an engaging challenge to continually learn and improve my skills
                        in creating high-quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets
                        more exciting as the years go by.
                        </Paragraph>
                        <StrongParagraph>
                            Here are a few technologies I’ve been working with recently:
                        </StrongParagraph>
                            <StackList>
                                <StackItem>Javascript</StackItem>
                                <StackItem>React</StackItem>
                                <StackItem>HTML</StackItem>
                                <StackItem>CSS</StackItem>
                            </StackList>
                    </InnerTextWrapper>
                </TextWrapper>
                <ImageWrapper>
                    <Image src={HeroImage}/>
                </ImageWrapper>
            </HeroWrapper>

        </>
    )
}

const HeroWrapper = styled.section`
    display: flex;
    align-items: center;
    padding-bottom: 64px;
    background-image: url("${BackgroundImage}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;

`

const TextWrapper = styled.div`
    flex: 4;

    @media ${QUERIES.laptopAndSmaller} {
        flex: 5;
    }

`

const StrongParagraph = styled(Parag)`
    font-weight: 900;
    margin-top: 40px;
`

const StackList = styled.ul`
    display: flex;
    font-weight: bold;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;
    margin-top: 16px;
`

const StackItem = styled.li`
    margin-bottom: 8px;
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
    pointer-events: none;
    margin-left: auto;
`

export default AboutPage
