import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import { useDarkMode } from "../context/DarkModeContext";
import colors from "../constants/colors";
import PdfModal from "./PdfModal";

const Certificates = () => {
  const { darkMode } = useDarkMode();
  const currentColors = darkMode ? colors.dark : colors.light;
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [certificates, setCertificates] = useState([]);

  // Function to fetch certificates from API
  const fetchCertificates = async () => {
    try {
      const response = await fetch("https://ceerisarmouk.com/crud_certificates.php");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  // useEffect to fetch certificates on component mount
  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleOpen = (url) => {
    setPdfUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: currentColors.background,
        color: currentColors.text,
        p: 3,
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {certificates.map((certificate) => (
          <Grid item xs={12} sm={4} key={certificate.id}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="100%"
              sx={{ backgroundColor: currentColors.cardBackground, p: 2, borderRadius: 2 }}
            >
              {/* Use certificate image or placeholder */}
              <img
                src={certificate.image_url || "https://ceerisarmouk.com/wp-content/uploads/2023/02/360_F_87283762_EhLJjVApJDqfmxVr84pMULwm3U4Ck1xo.jpg"}
                alt=""
                style={{ width: "100%", maxWidth: "200px", height: "150px", objectFit: "contain" }}
              />
              <Button
                variant="contained"
                onClick={() => handleOpen(certificate.pdf_url)}
                sx={{
                  marginTop: 2,
                  backgroundColor: currentColors.primary,
                  color: currentColors.white,
                  "&:hover": {
                    backgroundColor: currentColors.secondary,
                  },
                }}
              >
                {certificate.title}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <PdfModal open={open} onClose={handleClose} pdfUrl={pdfUrl} />
    </Box>
  );
};

export default Certificates;
