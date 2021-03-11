import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Container, Texts } from './styles';
import { Link } from 'react-router-dom';

function Chat({ name, message, timestamp, profileImg }) {
  return (
    <Link to={`/c/${name}`}>
      <Container>
        <Avatar src={profileImg} className="img" alt="profile" />
        <Texts>
          <h2>{name}</h2>
          <p>{message}</p>
        </Texts>
        <p>{timestamp}</p>
      </Container>
    </Link>
  );
}

export default Chat;