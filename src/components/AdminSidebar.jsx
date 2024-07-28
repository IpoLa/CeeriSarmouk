// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupIcon from "@mui/icons-material/Group";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../styles/AdminSidebar.css";

const AdminSidebar = () => {
  const location = useLocation();

  const getActiveStyle = (path) => {
    return location.pathname === path
      ? {
          backgroundColor: "#fff",
          color: "#444",
          marginLeft: "5px",
          borderRadius: "20px 0 0 20px",
        }
      : { backgroundColor: "#333" };
  };

  const getBeforeAfterStyle = (path) => {
    const index = routes.findIndex((route) => route.path === path);
    const isBefore = index > 0 && location.pathname === routes[index - 1].path;
    const isAfter =
      index < routes.length - 1 && location.pathname === routes[index + 1].path;
    return isBefore
      ? {
          // borderRadius: "0 20px 0px 0",
          backgroundColor: "#333",
          marginTop: "5px",
        }
      : isAfter
      ? {
          // borderRadius: "0 0px 20px 0",
          backgroundColor: "#333",
          marginBottom: "5px",
        }
      : {};
  };

  const routes = [
    { path: "/dashboard", icon: <HomeIcon color={"warning"} />, text: "Home" },
    {
      path: "/admin/profile",
      icon: <PersonIcon color={"warning"} />,
      text: "Profile",
    },
    {
      path: "/admin/slides",
      icon: <WidgetsIcon color={"warning"} />,
      text: "Slides",
    },
    {
      path: "/admin/certificates",
      icon: <GroupIcon color={"warning"} />,
      text: "Certificates",
    },
    {
      path: "/admin/gallerie",
      icon: <WidgetsIcon color={"warning"} />,
      text: "Gallerie",
    },
    {
      path: "/notifications",
      icon: <NotificationsIcon color={"warning"} />,
      text: "Notifications",
    },
    {
      path: "/settings",
      icon: <SettingsIcon color={"warning"} />,
      text: "Parametres",
    },
  ];

  return (
    <div className="sidebar">
      {/* <div className="sidebar-brand">
        <Typography variant="h5" className="brand-text">
          Colivan
        </Typography>
      </div> */}
      <List>
        {routes.map(({ path, icon, text }) => (
          <ListItem
            button
            component={Link}
            to={path}
            key={path}
            sx={{
              ...getActiveStyle(path),
              ...getBeforeAfterStyle(path),
              "&:hover": {
                backgroundColor: "#fff",
                color: "#444",
                borderRadius: "20px 0 0 20px",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === path ? "#fff" : "#ccc",
                fontSize: location.pathname === path ? "1.4rem" : "1.2rem",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AdminSidebar;
