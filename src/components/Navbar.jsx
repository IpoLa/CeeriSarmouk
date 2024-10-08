import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  IconButton,
  CssBaseline,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerItem from "./DrawerItem";
import { useDarkMode } from "../context/DarkModeContext";
import colors from "../constants/colors";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  transition: "min-height 0.3s ease, transform 0.3s ease",
  [theme.breakpoints.up("sm")]: {
    minHeight: 64,
  },
}));

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  // {
  //   text: "Home",
  //   to: "/",
  // },
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
  // {
  //   text: "FR",
  //   to: "/contact",
  // },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleScroll = () => {
    const scrollCheck = window.scrollY > 50;
    if (scrollCheck !== scrolled) {
      setScrolled(scrollCheck);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const currentColors = darkMode ? colors.dark : colors.light;

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: scrolled
            ? `${currentColors.primary}CC`
            : currentColors.primary,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition:
            "background-color 0.3s ease, backdrop-filter 0.3s ease, min-height 0.3s ease, transform 0.3s ease, border 0.5s ease",
          minHeight: scrolled ? 45 : 64, // Change minHeight based on scroll state
          justifyItems: scrolled ? "center" : "flex-start",
          backgroundImage: scrolled
            ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))"
            : "none",
          transform: scrolled ? "scale(0.90)" : "scale(1)", // Apply scaleX based on scroll state
          borderRadius: scrolled ? "20px" : 0,
        }}
        elevation={scrolled ? 5 : 0}
      >
        <StyledToolbar sx={{ minHeight: scrolled ? 48 : 64 }}>
          <img
            src={
              "https://ceerisarmouk.com/wp-content/uploads/2019/11/ceeri-logo-2-300x214-1.png"
            }
            alt="Ceeri Sarmouk"
            style={{
              width: "60px",
              height: "60px",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListMenu>
              {itemList.map((item) => {
                const { text } = item;
                return (
                  <ListItem key={text}>
                    <ListItemButton
                      component={Link}
                      to={item.to}
                      sx={{
                        color: currentColors.white,
                        width: '140px',
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: currentColors.secondary,
                        },
                      }}
                    >
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </ListMenu>
          </Box>
          <Box
            sx={{ display: { xs: "block", sm: "none" } }}
            sm={{ display: "none" }}
          >
            <DrawerItem />
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
