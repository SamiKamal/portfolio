import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Heading from '../../components/Texts/Heading'
import Paragraph from '../../components/Texts/Paragraph'
import SubHeading from '../../components/Texts/Sub-Heading'
import SkullImage from '../../images/Hero main-image.png'
import BackgroundImage from '../../images/Hero background-image.png'
import {Fly} from '../../util/constants'

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

            <WorkWrapper>
                <Heading>Work</Heading>
                <InnerTextWrapper>
                    <SubHeading symbol="?">Latest work</SubHeading>
                </InnerTextWrapper>
                <WorkList>
                    <WorkProject>
                        <WorkImageWrapper>
                            <WorkImage/>
                        </WorkImageWrapper>

                        <WorkTextWrapper>
                            <WorkHeader>Did I meet a hacker</WorkHeader>
                            <WorkSummary>It’s a website that allow users to search and report hackers they meet in video games</WorkSummary>
                        </WorkTextWrapper>

                        <WorkFooter>
                            <WorkLinksWrapper>
                                <WorkLink to="">Read More</WorkLink>
                                <WorkLink to="">Visit</WorkLink>
                            </WorkLinksWrapper>
                            <WorkIconsWrapper>
                                
                            </WorkIconsWrapper>
                        </WorkFooter>
                    </WorkProject>

                    <WorkProject>
                        <WorkImageWrapper>
                            <WorkImage/>
                        </WorkImageWrapper>

                        <WorkTextWrapper>
                            <WorkHeader>Did I meet a hacker</WorkHeader>
                            <WorkSummary>It’s a website that allow users to search and report hackers they meet in video games</WorkSummary>
                        </WorkTextWrapper>

                        <WorkFooter>
                            <WorkLinksWrapper>
                                <WorkLink to="">Read More</WorkLink>
                                <WorkLink to="">Visit</WorkLink>
                            </WorkLinksWrapper>
                            <WorkIconsWrapper>
                                
                            </WorkIconsWrapper>
                        </WorkFooter>
                    </WorkProject>

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
    animation: ${Fly} 5s infinite alternate;
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
const WorkImageWrapper = styled.div`
    height: 260px;
    background-color: white;
    border-radius: 8px;
    box-shadow:
        0px 1px 2.2px rgba(0, 0, 0, 0.02),
        0px 2.5px 5.3px rgba(0, 0, 0, 0.028),
        0px 4.6px 10px rgba(0, 0, 0, 0.035),
        0px 8.3px 17.9px rgba(0, 0, 0, 0.042),
        0px 15.5px 33.4px rgba(0, 0, 0, 0.05),
        0px 37px 80px rgba(0, 0, 0, 0.07)
;
    transition: transform 750ms, box-shadow 750ms;

`

const WorkProject = styled.article`
    --spacing: 16px;
    max-width: 405px;
    background-color: var(--color-light-grey);
    border-radius: 8px;
    padding: var(--spacing);

    &:hover ${WorkImageWrapper}{
        transform: translate(calc(var(--spacing) * 2), calc(var(--spacing) * -1.55));
        box-shadow:
            -2.1px 1.6px 1.3px rgba(0, 0, 0, 0.05),
            -4.6px 3.4px 2.9px rgba(0, 0, 0, 0.068),
            -7.6px 5.8px 4.8px rgba(0, 0, 0, 0.08),
            -11.6px 8.7px 7.2px rgba(0, 0, 0, 0.088),
            -16.7px 12.5px 10.4px rgba(0, 0, 0, 0.094),
            -23.6px 17.7px 14.7px rgba(0, 0, 0, 0.099);
        transition: transform 250ms, box-shadow 250ms;
    }
`


const WorkImage = styled.img`
    
`

const WorkTextWrapper = styled.div`
    margin-top: 16px;
    margin-bottom: 32px;
`

const WorkHeader = styled.h3`
`

const WorkSummary = styled.p`
    line-height: 1.2;
`

const WorkFooter = styled.footer`
`

const WorkLinksWrapper = styled.div`
`

const WorkLink = styled(Link)`
    color: inherit;
    transition: color 250ms;

    &:not(:last-child){
        margin-right: 8px;
    }

    &:hover{
        color: var(--color-secondary);
    }

`

const WorkIconsWrapper = styled.div`
`

export default HomePage
