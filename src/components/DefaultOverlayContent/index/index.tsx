import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string
  description: string
  leftButton: string
  rightButton: string
}

const DefaultOverlayContent: React.FC<Props> = ({label, description, leftButton, rightButton}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>{leftButton}</button>
        <button className={rightButton === "" ? "empty" : "white"}>{rightButton}</button>
      </Buttons>
    </Container>
  )
}

export default DefaultOverlayContent