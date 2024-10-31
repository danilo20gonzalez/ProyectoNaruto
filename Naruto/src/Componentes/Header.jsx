import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Header.css';

const Header = ({ handleNavigateHome, handleNavigateFavorites }) => {
  return (
    <AppBar position="static" className="header-container">
      <Toolbar className="toolbar">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={handleNavigateHome}
          className="header-logo"
        >
          <img
            src="https://i.pinimg.com/736x/d8/e3/04/d8e3040372030c633df7f7ee5034dfef.jpg"
            alt="Naruto Logo"
            className="logo-image"
          />
        </IconButton>

        <Typography variant="h6" className="header-text">
          APLICACIÓN DE NARUTO
        </Typography>

        <Button
          color="inherit"
          startIcon={<FavoriteIcon />}
          onClick={handleNavigateFavorites}
          className="header-button"
        >
          Ver Favoritos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
