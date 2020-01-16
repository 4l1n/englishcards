import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EnglishCards from './EnglishCards';



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Elije Carta
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        <MenuItem key={1} onClick={handleClose}>Carta 1</MenuItem>
        <MenuItem key={2} onClick={handleClose}>Carta 2</MenuItem>
        <MenuItem key={3} onClick={handleClose}>Carta 3</MenuItem>
        <MenuItem key={4} onClick={handleClose}>Carta 4</MenuItem>
        <MenuItem key={5} onClick={handleClose}>Carta 5</MenuItem>
        <MenuItem key={6} onClick={handleClose}>Carta 6</MenuItem>
        <MenuItem key={7} onClick={handleClose}>Carta 7</MenuItem>
        <MenuItem key={8} onClick={handleClose}>Carta 8</MenuItem>
        <MenuItem key={9} onClick={handleClose}>Carta 9</MenuItem>
        <MenuItem key={10} onClick={handleClose}>Carta 10</MenuItem>
        <MenuItem key={11} onClick={handleClose}>Carta 11</MenuItem>
        <MenuItem key={12} onClick={handleClose}>Carta 12</MenuItem>
      </Menu>
    </div>
  );
}
