import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom'

function Header({ iconBack }) {
  const history = useHistory();

  return (
    <Container>
      <IconButton onClick={() => history.replace(iconBack)}>
        {iconBack ? (
          <ArrowBackIcon className="iconArrow" fontSize="large"/>
        ) : (
          <PersonIcon className="icon" fontSize="large"/>
        )}
      </IconButton>
      <Link to="/">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="tinder"/>
      </Link>
      <Link to="/c">
        <IconButton>
          <ForumIcon className="icon" fontSize="large"/>
        </IconButton>
      </Link>
    </Container>
  );
}

export default Header;