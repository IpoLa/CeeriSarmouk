import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Switch,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    justifyContent: "flex-end",
  },
  settings: {
    maxHeight: "calc(100vh - 64px)",
    overflowY: "auto",
  },
});

const SettingsDrawer = ({ open, onClose, onDirectionChange, onThemeChange, themeMode }) => {
  const [darkMode, setDarkMode] = useState(themeMode === "dark");
  const classes = useStyles();

  const handleThemeToggle = () => {
    const newThemeMode = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    onThemeChange(newThemeMode);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <List className={classes.settings}>
        <ListItem button onClick={() => onDirectionChange("rtl")}>
          <ListItemIcon>
            <FormatTextdirectionRToLIcon />
          </ListItemIcon>
          <ListItemText primary="RTL" />
        </ListItem>
        <ListItem button onClick={() => onDirectionChange("ltr")}>
          <ListItemIcon>
            <FormatTextdirectionLToRIcon />
          </ListItemIcon>
          <ListItemText primary="LTR" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Dark Mode" />
          <Switch
            checked={darkMode}
            onChange={handleThemeToggle}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SettingsDrawer;
