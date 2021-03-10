import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <IconButton>
        <PersonIcon className="icon" fontSize="large"/>
      </IconButton>
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="tinder"/>
      <IconButton>
        <ForumIcon className="icon" fontSize="large"/>
      </IconButton>
    </Container>
  );
}

export default Header;