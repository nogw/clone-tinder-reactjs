import React from 'react';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email';

import { Container } from './styles';

function Buttons() {
  return (
    <Container>
      <IconButton className="close">
        <CloseIcon fontSize="Large" />
      </IconButton>
      
      <IconButton className="favorite">
        <FavoriteIcon fontSize="Large" />
      </IconButton>

      <IconButton className="Message">
        < EmailIcon fontSize="Large" />
      </IconButton>
    </Container>
  );
}

export default Buttons;