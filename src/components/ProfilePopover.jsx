import React from "react";
import {
  Popover,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  popover: {
    padding: "16px",
    minWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    cursor: "pointer",
    height: "50px",
    width: "50px",
  },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "green",
    width: 12,
    height: 12,
    borderRadius: "50%",
  },
  button: {
    margin: "8px",
    width: "100%",
  },
});

const ProfilePopover = ({
  id,
  open,
  anchorEl,
  onClose,
  notifications,
  onProfileClick,
}) => {
  const classes = useStyles();

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className={classes.popover}>
        <IconButton className={classes.avatar} onClick={onProfileClick}>
          <Avatar
            alt="Profile"
            src="https://avatars.githubusercontent.com/u/13950389?v=4"
          />
        </IconButton>
        <Typography variant="subtitle1" gutterBottom>
          +213 0696992900
        </Typography>
        <div className={classes.notificationDot} />
        <Link to="/profile" style={{ textDecoration: "none", width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onClose}
          >
            Paramètres du profil
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={onClose}
        >
          Déconnexion
        </Button>
      </div>
    </Popover>
  );
};

export default ProfilePopover;
