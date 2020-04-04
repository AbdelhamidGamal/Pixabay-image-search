import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Nav = (props) => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5'>Pixabay Search</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
