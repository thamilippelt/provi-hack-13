import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useHistory } from 'react-router';
import { goToLogin } from '../../router/coordinator';
import lg from '../../assets/lg.png'

const Header = () => {
    const history = useHistory()
    

    const buttonAction = () => {
      goToLogin(history)
    }

    return (
      <AppBar position="static">
        <StyledToolbar>
          <img src={lg}/>
          <Button variant="contained" color="success" onClick={() => buttonAction()}>Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header