import React from 'react'
import { GitHub } from 'react-feather'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { QUERIES } from '../../util/constants'

function WorkCard({title, summary, readMoreLink, visitLink, githubLink, src, stack}) {
    return (
        <WorkProject>
        <WorkImageWrapper>
            <WorkImage src={src} alt={`${title} cover image`}/>
        </WorkImageWrapper>

        <WorkTextWrapper>
            <WorkHeader>{title}</WorkHeader>
            <WorkSummary>{summary}</WorkSummary>
        </WorkTextWrapper>

        <StackWrapper>
                <StackList>
                    {stack.map((el, i) => <StackItem key={i}>{el}</StackItem>)}
                </StackList>
        </StackWrapper>

        <WorkFooter>
            <WorkLinksWrapper>
                <WorkLink to={readMoreLink}>Read More</WorkLink>
                <WorkLink target="_blank" as="a" href={visitLink}>Visit</WorkLink>
            </WorkLinksWrapper>
            <WorkIconsWrapper>
                <ButtonIcon target="_blank" as="a" href={githubLink}>
                    <GitHub/>
                </ButtonIcon>
            </WorkIconsWrapper>
        </WorkFooter>
    </WorkProject>
)
}

const WorkImageWrapper = styled.div`
    height: 260px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
        0px 1px 2.2px rgba(0, 0, 0, 0.02),
        0px 2.5px 5.3px rgba(0, 0, 0, 0.028),
        0px 4.6px 10px rgba(0, 0, 0, 0.035),
        0px 8.3px 17.9px rgba(0, 0, 0, 0.042),
        0px 15.5px 33.4px rgba(0, 0, 0, 0.05),
        0px 37px 80px rgba(0, 0, 0, 0.07)
;
    transition: transform 750ms, box-shadow 750ms;
    will-change: transform;

`

const WorkProject = styled.article`
    --spacing: 16px;
    display: flex;
    flex-direction: column;
    max-width: 405px;
    background-color: var(--color-light-grey);
    border-radius: 8px;
    padding: var(--spacing);

    @media not screen and ${QUERIES.tabletAndSmaller} {
        &:hover ${WorkImageWrapper}{
            transform: translate(calc(var(--spacing) * 2), calc(var(--spacing) * -1.55));
            box-shadow:
                -2.1px 1.6px 1.3px rgba(0, 0, 0, 0.05),
                -4.6px 3.4px 2.9px rgba(0, 0, 0, 0.068),
                -16.7px 12.5px 10.4px rgba(0, 0, 0, 0.094);
            transition: transform 250ms, box-shadow 250ms;
        }
    }

    @media ${QUERIES.tabletAndSmaller} {
        ${WorkImageWrapper}{
            transform: translate(calc(var(--spacing) * 2), calc(var(--spacing) * -1.55));
            box-shadow:
                -2.1px 1.6px 1.3px rgba(0, 0, 0, 0.05),
                -4.6px 3.4px 2.9px rgba(0, 0, 0, 0.068),
                -16.7px 12.5px 10.4px rgba(0, 0, 0, 0.094);
            transition: transform 250ms, box-shadow 250ms;
        }
    }


`


const WorkImage = styled.img`
    width: auto;
    height: 100%;
    object-fit: cover;
`

const WorkTextWrapper = styled.div`
    margin-top: 16px;
    margin-bottom: 8px;
`

const WorkHeader = styled.h3`
`

const WorkSummary = styled.p`
    line-height: 1.2;
`

const WorkFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`

const WorkLinksWrapper = styled.div`
`

const WorkLink = styled(Link)`
    color: inherit;
    transition: color 250ms;

    &:not(:last-child){
        margin-right: 16px;
    }

    &:hover{
        color: var(--color-secondary);
    }

`

const StackWrapper = styled.div`
    margin-top: auto;
`

export const StackList =  styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin: 16px 0;
    list-style: none;
    padding: 0;
`

export const StackItem = styled.li`
    border-bottom: 3px solid var(--color-secondary);
`


const WorkIconsWrapper = styled.div`
`

const ButtonIcon = styled(Link)`
    border: none;
    background: none;
    color: inherit;

    & > *:hover{
        filter: brightness(.7);
    }

`

export default WorkCard
