import React from 'react';
import Card from '../Card';
import { Container } from './styles';

function CardContainer() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default CardContainer;