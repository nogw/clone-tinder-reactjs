import React, { useState, useEffect } from 'react';
import { Container, Card, CardContainer } from './styles';
import TinderCard from 'react-tinder-card'
import db from '../../firebase'

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "ana",
      url: "https://www.randomlists.com/img/people/jesus_christ.jpg"
    },
    {
      name: "mario",
      url: "https://www.randomlists.com/img/people/eva_longoria.jpg"
    },
  ])
  
  useEffect(() => {
    db.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <Container>
      <CardContainer>
        {
          people.map((person) => {
            return (
              <TinderCard 
                key={person.name} 
                className="cardItem"
                preventSwipe={["up", "down"]}
              >

                <Card bgImg={person.url}>
                  <h3>{person.name}</h3>
                </Card>
            
              </TinderCard>
            )
          })
        }
      </CardContainer>
    </Container>
  );
}

export default Cards;