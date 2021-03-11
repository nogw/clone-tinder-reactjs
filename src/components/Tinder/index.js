import React from 'react';
import Header from '../Header'
import Cards from '../Cards'
import Buttons from '../Buttons';
import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chats from '../Chats';
import ChatPriv from '../ChatPriv';

function Tinder() {
  return (
    <Container>
      <Router>        
        <Switch>
          <Route path="/" exact>  
            <Header />
            <Cards />
            <Buttons />
          </Route>
          <Route path="/c" exact>
            <Header iconBack="/"/>
            <Chats />
          </Route>
          <Route path="/c/:person" exact>
            <Header iconBack="/"/>
            <ChatPriv />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default Tinder;