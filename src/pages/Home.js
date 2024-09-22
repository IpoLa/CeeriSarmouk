import React, { useState, useEffect } from "react";
import TabsComponent from "../components/Tabs";
import GetStarted from "../components/GetStarted";
import FullScreenCarousel from "../components/FullScreenCarousel";
import {
  Popover,
  Button,
  IconButton,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AlgeriaMapWithPopover from "../components/AlgeriaMap";
import Certificates from "../components/Certificates";
import { useDarkMode } from "../context/DarkModeContext";
import colors from "../constants/colors";
import VideoSection from "../components/VideoSection";
import AboutUsSection from "../components/AboutUsSection";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LanguageIcon from "@mui/icons-material/Language";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Navbar from "../components/Navbar.jsx";
import AccordionComponent from "../components/Accordion.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GallerieShort from "../components/GalleryShort.jsx";
import ProjectOne from "../components/ProjectsCarousel.jsx";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selectedOption: "Contact",
    message: "",
  });
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { darkMode, toggleDarkMode } = useDarkMode(); // Assuming toggleDarkMode is provided by DarkModeContext
  const currentColors = darkMode ? colors.dark : colors.light;

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("https://ceerisarmouk.com/getSlides.php");
        if (!response.ok) {
          throw new Error("Failed to fetch slides");
        }
        const data = await response.json();
        setSlides(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangClick = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLangAnchorEl(null);
  };

  const handleInputChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const open = Boolean(anchorEl);
  const langOpen = Boolean(langAnchorEl);
  const id = open ? "simple-popover" : undefined;
  const langId = langOpen ? "lang-popover" : undefined;

  return (
    <Box
      sx={{
        backgroundColor: currentColors.background,
        color: currentColors.textPrimary,
      }}
    >
      <Navbar />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>Error: {error}</Typography>
      ) : (
        <>
          <FullScreenCarousel slides={slides} />
          <Certificates />
          <AboutUsSection />

          <GetStarted />

          <div className="justify-content-center align-items-center m-3 border-1 d-flex">
            <AlgeriaMapWithPopover />
          </div>
          <AccordionComponent />
          <ProjectOne />
          {/* <GallerieShort /> */}
          <div className="justify-content-center mt-2 overflow-hidden align-items-center h-100">
            <VideoSection />
            <div style={{ justifyContent: "center", display: "flex" }}>
              <TabsComponent />
            </div>
          </div>
          

          {/* Dark Mode Toggle Button */}
          <IconButton
            onClick={toggleDarkMode}
            style={{
              position: "fixed",
              bottom: "90px",
              left: "20px",
              backgroundColor: currentColors.primary,
              color: currentColors.white,
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <Brightness4Icon />
          </IconButton>

          {/* Language Selection Button */}
          <IconButton
            onClick={handleLangClick}
            style={{
              position: "fixed",
              bottom: "20px",
              left: "20px",
              backgroundColor: currentColors.primary,
              color: currentColors.white,
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <LanguageIcon />
          </IconButton>

          {/* Contact Button */}
          <IconButton
            onClick={handleClick}
            style={{
              position: "fixed",
              bottom: "160px",
              right: "20px",
              backgroundColor: currentColors.primary,
              color: currentColors.white,
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <ContactSupportIcon />
          </IconButton>

          <Footer />

          {/* Language Selection Popover */}
          <Popover
            id={langId}
            open={langOpen}
            anchorEl={langAnchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Box
              sx={{
                p: 2,
                width: 200,
                backgroundColor: currentColors.background,
                color: currentColors.text,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Language
              </Typography>
              <Select
                labelId="select-lang-label"
                id="select-lang"
                value={formData.selectedOption}
                onChange={handleInputChange("selectedOption")}
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                }}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </Box>
          </Popover>

          {/* Contact Popover */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Box
              sx={{
                p: 2,
                width: 300,
                backgroundColor: currentColors.background,
                color: currentColors.text,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {formData.selectedOption
                  ? formData.selectedOption.toUpperCase()
                  : "Contact Us"}
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleInputChange("name")}
                InputLabelProps={{ style: { color: currentColors.text } }}
                InputProps={{
                  style: { color: currentColors.text },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: currentColors.text,
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleInputChange("phone")}
                InputLabelProps={{ style: { color: currentColors.text } }}
                InputProps={{
                  style: { color: currentColors.text },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: currentColors.text,
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange("email")}
                InputLabelProps={{ style: { color: currentColors.text } }}
                InputProps={{
                  style: { color: currentColors.text },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: currentColors.text,
                    },
                  },
                }}
              />
              <Select
                labelId="select-label"
                id="select"
                value={formData.selectedOption}
                onChange={handleInputChange("selectedOption")}
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                }}
              >
                <MenuItem value="Reclamation">Reclamation</MenuItem>
                <MenuItem value="Contact">Contact</MenuItem>
              </Select>
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange("message")}
                InputLabelProps={{ style: { color: currentColors.text } }}
                InputProps={{
                  style: { color: currentColors.text },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: currentColors.text,
                    },
                  },
                }}
              />

              <Button
                variant="contained"
                fullWidth
                type="submit"
                size="medium"
                sx={{
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  py: 2,
                  mt: 3,
                  mb: 2,
                  borderRadius: 0,
                  backgroundColor: "#14192d",
                  "&:hover": {
                    backgroundColor: "#1e2a5a",
                  },
                }}
              >
                ENVOYER
              </Button>
            </Box>
          </Popover>
        </>
      )}
    </Box>
  );
};

export default Home;
