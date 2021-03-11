import React from 'react';
import Chat from '../Chat';

import { Container } from './styles';

function Chats() {
  return (
    <Container>
      <Chat
        name="Bean"
        message="reformed."
        timestamp="10 seconds ago"
        profileImg="https://boredhumans.b-cdn.net/faces2/972.jpg"
      />
      <Chat
        name="Elisa"
        message="reformed."
        timestamp="40 seconds ago"
        profileImg="https://boredhumans.b-cdn.net/faces2/756.jpg"
      />
      <Chat
        name="Ana"
        message="reformed."
        timestamp="20 seconds ago"
        profileImg="https://boredhumans.b-cdn.net/faces2/788.jpg"
      />
      <Chat
        name="Mark"
        message="reformed."
        timestamp="30 seconds ago"
        profileImg="https://boredhumans.b-cdn.net/faces2/189.jpg"
      />
    </Container>
  );
}

export default Chats;