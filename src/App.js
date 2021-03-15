import React from 'react';
import CardContainer from './components/CardsContainer';
import Navbar from './components/Navbar';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <Navbar />
      <CardContainer/>
      <GlobalStyle />
    </>
  );
}

export default App;