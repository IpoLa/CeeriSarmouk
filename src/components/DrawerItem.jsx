import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useDarkMode } from '../context/DarkModeContext';
import colors from '../constants/colors';

const itemList = [
  {
    text: "A propos",
    to: "/about",
  },
  {
    text: "Nos services",
    to: "/services",
  },
  {
    text: "Quelques refs",
    to: "/references",
  },
  {
    text: "Actualités",
    to: "/news",
  },
  {
    text: "Galerie",
    to: "/gallery",
  },
  {
    text: "FR",
    to: "/contact",
  },
];

const DrawerItem = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const currentColors = darkMode ? colors.dark : colors.light;

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ ml: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: '90%', height: '100%', backgroundColor: currentColors.primary },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" sx={{ mb: 2, color: currentColors.white }}>
            Ceeri Sarmouk
          </Typography>
          <List>
            {itemList.map((item) => {
              const { text, to } = item;
              return (
                <ListItem key={text} button component={Link} to={to} onClick={handleDrawerToggle}>
                  <ListItemText primary={text} sx={{ textAlign: 'center', color: currentColors.white }} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerItem;
