import React from "react";
import {ReactNode} from "react";
import styled, {css} from "styled-components/macro";

const Paragraph = styled.p`
  /* This renders the buttons above... Edit me! */
  font-size: .9rem;
  font-family: 'Anek Latin', sans-serif;


  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.black && css`
    color: black;
  `}

  ${props => props.white && css`
    color: white;
  `}
`

const StyledHeading = styled.h1`
  /* This renders the buttons above... Edit me! */
  font-size: 1.5rem;
  font-family: 'Anek Latin', sans-serif;


  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.black && css`
    color: black;
  `}

  ${props => props.white && css`
    color: white;
  `}
`


export type AccordionData = {
    title: string;
    content: ReactNode;
};

const AccordionItems = [
    {
        title: 'Fake Data',
        content: (
            <div>
                <Paragraph white>No more sample data creation. We'have got it covered</Paragraph>
            </div>
        ),
    },
    {
        title: 'Real Responses',
        content: (
            <div>
                <Paragraph white>Develop with real response codes. GET, POST, PUT, DELETE supported</Paragraph>
            </div>
        ),
    },
    {
        title: 'Always on',
        content: (
            <div>
                <StyledHeading white>7/24</StyledHeading>
                <Paragraph white>free access in your development processes. No nuts.</Paragraph>
            </div>
        ),
    },
];

export default AccordionItems