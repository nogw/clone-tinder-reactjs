import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';
import { Container, Header, Add, Content } from './styles';

function Card() {
  const [card, setCard] = useState([
    {
      name: 'Doing',
      content: 'teste',
    }
  ])

  return (
    <Container>
      <Header>
        <h1>{card[0].name}</h1>
        <div className="icon">
          <MoreHorizIcon />
        </div>
      </Header>
      <Content>
        {card[0].content}
      </Content>
      <Add>
        <h1><AddIcon/> Add a card</h1>
      </Add>
    </Container>
  );
}

export default Card;