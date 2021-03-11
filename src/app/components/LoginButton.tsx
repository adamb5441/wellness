import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Avatar  }from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout  } = useAuth0();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = function(event: React.ChangeEvent<any>) {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    !isAuthenticated ?

    <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>

    :

    <div>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <Avatar  src={user.picture} alt={user.name}  />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={() => {
        logout({ returnTo: window.location.origin })
        handleClose()
      }}>Logout</MenuItem>
    </Menu>
  </div>
  );

};

export default LoginButton;