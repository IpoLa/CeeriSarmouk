import React, { useState } from "react";
import { Map } from "react-algeria-map";
import { Popover, Typography } from "@mui/material";
import willaya from "../constants/wilaya";
import Title from "./Title";

const AlgeriaMapWithPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedWilaya, setSelectedWilaya] = useState("");

  const handleWilayaClick = (wilaya, event) => {
    console.log("Wilaya clicked:", wilaya);
    console.log("Event:", event);
    setAnchorEl(event.target);
    setSelectedWilaya(wilaya);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedWilaya("");
  };

  const open = Boolean(anchorEl !== null ? true : false);

  return (
    <div className="col d-block justify-content-center align-content-center text-center">
    <Title text={"Notre projets"} textAlign={"center"} />
      <Map
        color="#55E6C1"
        HoverColor="#58B19F"
        stroke="#fff"
        hoverStroke="#218c74"
        height="500px"
        width="500px"
        data={willaya}
        onWilayaClick={(wilaya, event) => handleWilayaClick(wilaya, event)}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {selectedWilaya && `You clicked on ${selectedWilaya}`}
        </Typography>
      </Popover>
    </div>
  );
};

export default AlgeriaMapWithPopover;
