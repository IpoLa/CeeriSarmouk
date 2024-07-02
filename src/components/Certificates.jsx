import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { useDarkMode } from "../context/DarkModeContext";
import colors from "../constants/colors";
import PdfModal from "./PdfModal";

const Certificates = () => {
  const { darkMode } = useDarkMode();
  const currentColors = darkMode ? colors.dark : colors.light;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [pdfUrl, setPdfUrl] = useState('');

  return (
    
    <Box
      sx={{ 
        flexGrow: 1,
        backgroundColor: currentColors.background,
        color: currentColors.text,
        p: 3 
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
            sx={{ backgroundColor: currentColors.cardBackground, p: 2, borderRadius: 2 }}
          >
            <img
              src="https://ceerisarmouk.com/wp-content/uploads/2023/03/1000_F_213329287_qfv9ZXTiOLdjTLZVhLd3QXeC0KZBG7Vw.png"
              alt=""
              title=""
              style={{ width: "100%", maxWidth: "200px", height: "150px", objectFit: "contain" }}
            />
            <Button
              variant="contained"
              href="/satisfaction"
              // onClick={() => ['https://ceerisarmouk.com/satisfaction',handleOpen()]}
              target="_blank"
              sx={{ 
                marginTop: 2,
                backgroundColor: currentColors.primary,
                color: currentColors.white,
                "&:hover": {
                  backgroundColor: currentColors.secondary,
                }
              }}
            >
              Formulaire Satisfaction
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
            sx={{ backgroundColor: currentColors.cardBackground, p: 2, borderRadius: 2 }}
          >
            <img
              src="https://ceerisarmouk.com/wp-content/uploads/2023/02/360_F_87283762_EhLJjVApJDqfmxVr84pMULwm3U4Ck1xo.jpg"
              alt=""
              title=""
              style={{ width: "100%", maxWidth: "200px", height: "150px", objectFit: "contain" }}
            />
            <Button
              variant="contained"
              // href="https://ceerisarmouk.com/wp-content/uploads/2022/10/Politique-qualite%CC%81-affichage.pdf"
              target="_blank"
              onClick={() => [setPdfUrl('https://ceerisarmouk.com/wp-content/uploads/2022/10/Politique-qualite%CC%81-affichage.pdf'),handleOpen()]}
              sx={{ 
                marginTop: 2,
                backgroundColor: currentColors.primary,
                color: currentColors.white,
                "&:hover": {
                  backgroundColor: currentColors.secondary,
                }
              }}
            >
              Politique Qualité
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
            sx={{ backgroundColor: currentColors.cardBackground, p: 2, borderRadius: 2 }}
          >
            <img
              src="data:image/png;base64,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"
              alt=""
              title=""
              style={{ width: "100%", maxWidth: "200px", height: "150px", objectFit: "contain" }}
            />
            <Button
              variant="contained"
              // href="https://ceerisarmouk.com/wp-content/uploads/2022/10/Certificat_2048_CEERI-SARMOUK.pdf"
              target="_blank"
              onClick={() => [setPdfUrl('https://ceerisarmouk.com/wp-content/uploads/2022/10/Certificat_2048_CEERI-SARMOUK.pdf'),handleOpen()]}
              sx={{ 
                marginTop: 2,
                backgroundColor: currentColors.primary,
                color: currentColors.white,
                "&:hover": {
                  backgroundColor: currentColors.secondary,
                }
              }}
            >
              Certificat ISO 9001
            </Button>
          </Box>
        </Grid>
      </Grid>
      <PdfModal open={open} onClose={handleClose} pdfUrl={pdfUrl} />
    </Box>
  );
};

export default Certificates;
