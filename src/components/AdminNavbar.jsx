import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsDrawer from "./NotificationsDrawer";
import ProfilePopover from "./ProfilePopover";
import SettingsDrawer from "./SettingsDrawer";
import { makeStyles } from "@mui/styles";

const drawerWidth = 260;

const useStyles = makeStyles({
  appBar: {
    zIndex: 1100, // Assuming zIndex for the AppBar
    position: "fixed",
    transition: "box-shadow 0.3s",
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: 8, // Adjust spacing as needed
    cursor: "pointer",
  },
  hideOnSmall: {
    display: "none",
    "@media (min-width: 600px)": {
      display: "block",
    },
  },
  appBarScrolled: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [themeMode, setThemeMode] = useState("light");
  const [openNotificationsDrawer, setOpenNotificationsDrawer] = useState(false);

  const handleNotificationsDrawerOpen = () => {
    setOpenNotificationsDrawer(true);
  };

  const handleNotificationsDrawerClose = () => {
    setOpenNotificationsDrawer(false);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handleThemeChange = (mode) => {
    setThemeMode(mode);
  };

  const openProfile = Boolean(profileAnchorEl);
  const profilePopoverId = openProfile ? "profile-popover" : undefined;
  const openSettings = Boolean(settingsAnchorEl);

  const notifications = [
    { id: 1, type: "alert", text: "Erreur critique rencontrée dans la gestion des commandes." },
    { id: 2, type: "warning", text: "Mise à jour système en cours, veuillez patienter." },
    { id: 3, type: "info", text: "Nouvelle fonctionnalité de suivi des livraisons disponible." },
    { id: 4, type: "warning", text: "Mise à jour système en cours, veuillez patienter." },
    { id: 5, type: "alert", text: "Erreur critique rencontrée dans la gestion des commandes." },
    { id: 6, type: "info", text: "Nouvelle fonctionnalité de suivi des livraisons disponible." },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${scrolled ? classes.appBarScrolled : ""}`}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            Ceeri Sarmouk
          </Typography>
          <IconButton
            color="inherit"
            className={classes.avatar}
            onClick={handleProfileClick}
          >
            <Avatar
              alt="Profile"
              src="https://avatars.githubusercontent.com/u/13950389?v=4"
              sx={{ margin: "5px" }}
            />
            <Typography className={classes.hideOnSmall}>Akram Mezaache</Typography>
          </IconButton>
          <IconButton color="inherit" onClick={handleNotificationsDrawerOpen}>
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleSettingsClick}
            style={{ marginLeft: 10 }}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawers & popover components */}
      {/* Notifications drawer */}
      <NotificationsDrawer
        open={openNotificationsDrawer}
        onClose={handleNotificationsDrawerClose}
        notifications={notifications}
      />

      {/* Profile Popover */}
      <ProfilePopover
        id={profilePopoverId}
        open={openProfile}
        anchorEl={profileAnchorEl}
        onClose={handleProfileClose}
        notifications={notifications}
        onProfileClick={handleProfileClose}
      />

      {/* Settings Drawer */}
      <SettingsDrawer
        open={openSettings}
        onClose={handleSettingsClose}
        onThemeChange={handleThemeChange}
      />
    </>
  );
};

export default Navbar;
