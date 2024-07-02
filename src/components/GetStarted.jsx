import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"À Propos de Ceeri Sarmouk"} textAlign={"start"} />
          <CustomTypography>
            CEERI (Cabinet d'Études Environnementaux et Risques Industriels)
            est une entreprise spécialisée dans les études environnementales,
            les évaluations de risques industriels, et les diagnostics de mise
            en conformité réglementaire d'installations. Fondée en 2000, CEERI
            s'engage à offrir des solutions durables pour les défis
            environnementaux rencontrés par les industries et les entreprises.
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img src={imgDetail} alt="CEERI Sarmouk" style={{ width: "100%" }} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img src={imgDetail2} alt="CEERI Sarmouk" style={{ width: "100%" }} />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Services de CEERI Sarmouk"}
            textAlign={"start"}
          />
          <CustomTypography>
            Les services proposés par CEERI Sarmouk incluent:
            <ul>
              <li>Études environnementales</li>
              <li>Évaluations des risques industriels</li>
              <li>Diagnostics de conformité réglementaire</li>
            </ul>
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
