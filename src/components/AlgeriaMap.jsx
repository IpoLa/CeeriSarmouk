import React, { useState } from "react";
import { Map } from "algeria-map-ts";
import { Dialog, DialogTitle, DialogContent, Typography, Button, Card, CardContent } from "@mui/material";
import Title from "./Title";
import wilaya from '../constants/wilaya'; // Assuming this is your wilaya data array

const AlgeriaMapWithModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [projects, setProjects] = useState([]);

  const handleWilayaClick = (wilayaCode, event) => {
    setSelectedWilaya(wilayaCode);
    fetchProjects(wilayaCode);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedWilaya("");
    setProjects([]);
    setModalOpen(false);
  };

  const fetchProjects = (wilayaCode) => {
    fetch(`https://www.ceerisarmouk.com/map_projects.php?wilaya=${wilayaCode}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Assuming data is an array of projects as shown above
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setProjects([]);
      });
  };

  return (
    <div className="col d-block justify-content-center align-content-center text-center">
      <Title text={"Notre projets"} textAlign={"center"} />
      <Map
        HoverColor="#58B19F"
        hoverStroke="#218c74"
        height="500px"
        // width="500px"
        data={wilaya}
        onWilayaClick={(wilayaCode, event) => handleWilayaClick(wilayaCode, event)}
      />
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <DialogTitle id="modal-title">{`Projects in ${selectedWilaya}`}</DialogTitle>
        <DialogContent>
          {projects.length > 0 ? (
            projects.map((project) => (
              <Card key={project.id} style={{ marginBottom: 20, boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: 8 }}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body1" paragraph>
                    {project.description}
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {project.images?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Project ${index + 1}`}
                        style={{ maxWidth: "100%", maxHeight: 200, objectFit: "contain", margin: "0 auto", marginBottom: 10 }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1">No projects found for {selectedWilaya}</Typography>
          )}
          <Button variant="contained" color="primary" onClick={handleCloseModal} style={{ marginTop: 10 }}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlgeriaMapWithModal;
