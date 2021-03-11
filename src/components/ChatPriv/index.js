import React, { useState } from 'react';
import { Container, Message, InputMessage } from './styles';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';

function ChatPriv() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'jesus',
      image: 'https://www.randomlists.com/img/people/jesus_christ.jpg',
      message: 'reformed.',
    }
  ])

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }])
    setInput("")
  }

  return (
    <Container>
      <p className="title">YOU MATCHED WITH JESUS ON 10/03/2020</p>
      {
        messages.map((message) => 
         message.name ? (
          <Message>
            <Avatar alt={message.name} src={message.image}/>
            <p>{message.message}</p>
          </Message>
         ) : (
          <Message>
            <p className="myMessage">{message.message}</p>
          </Message>
         )
        )
      } 

      <InputMessage>
        <form onSubmit={handleSend}>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" input="Type a message..."/>
          <button><SendIcon/></button>
        </form>
      </InputMessage>
    </Container>
  );
}

export default ChatPriv;