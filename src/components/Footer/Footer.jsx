import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GlobeDemo } from "../GlobeDemo";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#ededed",
  flex: 1,
  backgroundImage: `url('https://nsa-dz.com/wp-content/uploads/2021/11/bg-footer.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative", // Ensure that absolute elements are relative to this container
  overflow: "hidden", // Prevent children from overflowing the container
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 30,
  },
}));

const StackColumn = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: 1,
  gap: 8,
  textAlign: "center",
  color: "#fff", // Set text color to white for better contrast against the background
}));

const Footer = () => {
  return (
    <FooterContainer
      component="footer"
      sx={{
        py: 6,
        px: 2,
        my: 0,
        position: "relative", // Allows positioning of the globe within the footer
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0, // Stick to the bottom of the footer
          left: 0, // Align to the left
          width: "100%", // Full width of the footer
          height: "100%", // Fit the globe within the footer's height
          zIndex: 0, // Place it behind other content
          opacity: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          overflow: "hidden", // Prevent the globe from overflowing
        }}
      >
        <GlobeDemo style={{ maxWidth: "100%", maxHeight: "100%" }} />{" "}
      </div>

      <StackColumn>
        <iframe
          title="C.E.E.R.I Sarmouk"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.1224140925306!2d5.399743474991141!3d36.18790460197642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f315901c388f2d%3A0xd6a2e51bb0784c6f!2sC.E.E.R.I%20Sarmouk!5e0!3m2!1sfr!2sdz!4v1728152164438!5m2!1sfr!2sdz"
          width="350"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"nos services"} />
        <FooterLink text={"ETUDE DE DANGERS"} />
        <FooterLink text={"CONCEPTION DES RÉSEAUX ANTI INCENDIE"} />
        <FooterLink text={"ASSISTANCE À L’INVESTISSEMENT"} />
        <FooterLink text={"ASSISTANCE TECHNIQUE"} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"CEERI SARMOUK"} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#fff", // Set icon color to white for better visibility
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#fff", // Set icon color to white for better visibility
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; 2024 Ceeri Sarmouk.
        </Typography>
      </StackColumn>
    </FooterContainer>
  );
};

export default Footer;
