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
import { Link } from "react-router-dom";
import colors from '../constants/colors';

const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const DrawerItem = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

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
          sx: { width: '100%', height: '100%' },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.light.primary,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2, color: colors.light.white }}>
            Ceeri Sarmouk
          </Typography>
          <List>
            {itemList.map((item) => {
              const { text, to } = item;
              return (
                <ListItem key={text} button component={Link} to={to} onClick={handleDrawerToggle}>
                  <ListItemText primary={text} sx={{ textAlign: 'center', color: colors.light.white }} />
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
