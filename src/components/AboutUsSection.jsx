import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import colors from "../constants/colors";
import { Button, styled, Typography } from "@mui/material";

const AboutUsSection = () => {
  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });
  return (
    <div
      className="ls mr-4 s-pt-5 s-pb-0 s-pt-xl-1 align-items-center s-parallax s-overlay mobile-overlay"
      id="section-beb467a"
      style={{
        // backgroundImage:
        //   'url("https://sudetanche.com/medias/bg_home_1.jpg")',

        backgroundImage: `url(${require("../assets/bg_home_1.jpg")})`,
        backgroundPosition: "50% 3px",
        backgroundAttachment: "fixed",
        height: "80vh",
        display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
      }}
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="7"></MDBCol>
          <MDBCol lg="5">
            <h4 className="special-heading text-center text-sm-left">
              <span
                className="fw-bold big-line-height big"
                style={{ color: colors.light.white, boxShadow: 5 }}
              >
                CEERI Cabinet d’Etudes Environnementaux et Risques Industriels
              </span>
            </h4>
            <div className="fw-divider-space divider-30 divider-lg-5"></div>
          </MDBCol>
          <MDBCol lg="5"></MDBCol>
          <MDBCol
            lg="7"
            className="col-xs-12 bottom-0 col-12 col-lg-7 bg-info animate cs cs2 color-transparent animated fadeInUp"
            data-animation="fadeInUp"
          >
            <div className="p-3 p-lg-100 cs cs2 bg-info">
              <div className="fw-divider-space hidden-xs hidden-sm hidden-md"></div>
              <h6 className="text-center text-sm-left">
                <span className="bold fw-bold">Qui sommes-nous ?</span>
              </h6>
              <div className="fw-divider-space divider-15 divider-lg-30"></div>
              <CustomTypography>
                CEERI (Cabinet d'Études Environnementaux et Risques Industriels)
                est une entreprise spécialisée dans les études
                environnementales, les évaluations de risques industriels, et
                les diagnostics de mise en conformité réglementaire
                d'installations. Fondée en 2000, CEERI s'engage à offrir des
                solutions durables pour les défis environnementaux rencontrés
                par les industries et les entreprises.
              </CustomTypography>
              <div className="fw-divider-space"></div>
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
                En savoir plus
              </Button>
              <div className="fw-divider-space hidden-xs hidden-sm"></div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AboutUsSection;
