import React from "react";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NotificationCard from "./NotificationCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 260;

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
    padding: "8px", // Adjust padding as needed
    justifyContent: "flex-end",
  },
  notifications: {
    maxHeight: "calc(100vh - 64px)", // Adjust according to your layout
    overflowY: "auto",
  },
  clearButton: {
    marginTop: "16px", // Adjust margin as needed
    marginLeft: "auto",
    marginRight: "8px", // Adjust margin as needed
  },
});

const NotificationsDrawer = ({ open, onClose, notifications }) => {
  const classes = useStyles();

  const handleClearNotifications = () => {
    // Handle clear notifications logic here
    console.log("Clearing notifications...");
  };

  return (
    <Drawer
      className={classes.drawer}
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
      <List className={classes.notifications}>
        {notifications.map((notification) => (
          <ListItem button key={notification.id}>
            <NotificationCard
              type={notification.type}
              text={notification.text}
            />
          </ListItem>
        ))}
        <ListItem className={classes.clearButton}>
          <Button variant="outlined" color="primary" onClick={handleClearNotifications}>
            Supprimer Tous
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NotificationsDrawer;
