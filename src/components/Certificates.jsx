import React from "react";
import { Box, Grid, Button } from "@mui/material";

const Certificates = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="m-3">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
          >
            <img
              src="https://ceerisarmouk.com/wp-content/uploads/2023/03/1000_F_213329287_qfv9ZXTiOLdjTLZVhLd3QXeC0KZBG7Vw.png"
              alt=""
              title=""
              style={{ width: "100%", maxWidth: "200px", height: "150px", objectFit: "contain", }}
            />
            <Button
              variant="contained"
              href="/satisfaction"
              target="_blank"
              sx={{ marginTop: 2 }}
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
          >
            <img
              src="https://ceerisarmouk.com/wp-content/uploads/2023/02/360_F_87283762_EhLJjVApJDqfmxVr84pMULwm3U4Ck1xo.jpg"
              alt=""
              title=""
              style={{ width: "100%", maxWidth: "200px", height: "150px", objectFit: "contain", }}
            />
            <Button
              variant="contained"
              href="https://ceerisarmouk.com/wp-content/uploads/2022/10/Politique-qualite%CC%81-affichage.pdf"
              target="_blank"
              sx={{ marginTop: 2 }}
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
          >
            <img
              src="https://ceerisarmouk.com/wp-content/uploads/2023/03/bci.png"
              alt=""
              title=""
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "150px",
                objectFit: "contain",
              }}
            />
            <Button
              variant="contained"
              href="https://ceerisarmouk.com/wp-content/uploads/2022/10/Certificat_2048_CEERI-SARMOUK.pdf"
              target="_blank"
              sx={{ marginTop: 2 }}
            >
              Certificat ISO 9001
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Certificates;
