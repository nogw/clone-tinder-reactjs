import React from 'react';
import Header from '../Header'
import Cards from '../Cards'
import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Tinder() {
  return (
    <Container>
      <Header />
      <Router>        
        <Switch>
        <Route path="/">  
          <Cards />
        </Route>
        <Route path="/chat">
          <Cards />
        </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default Tinder;