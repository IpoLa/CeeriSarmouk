import React, { useState, useEffect } from "react";
import AdminSlide from "../components/AdminSlide";
import EditSlideModal from "../components/EditSlideModal";
import { Box, Grid, Button, Typography } from "@mui/material";
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';

const Slides = () => {
  const [slides, setSlides] = useState([]);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [selectedSlide, setSelectedSlide] = useState(null);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await fetch("https://ceerisarmouk.com/getSlides.php", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setSlides(data);
      } else {
        console.error("Failed to fetch slides");
      }
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  };

  const handleAddSlide = () => {
    setSelectedSlide({
      image: "",
      alt: "",
      label: "",
      text: "",
    });
    setOpenModal(true); // Open modal for adding a new slide
  };

  const handleEditSlide = (slide) => {
    setSelectedSlide(slide);
    setOpenModal(true); // Open modal for editing the selected slide
  };

  const handleDeleteSlide = async (id) => {
    try {
      const response = await fetch("https://ceerisarmouk.com/getSlides.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        fetchSlides(); // Refresh slides after deletion
      } else {
        console.error("Failed to delete slide");
      }
    } catch (error) {
      console.error("Error deleting slide:", error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
    fetchSlides(); // Ensure slides are refreshed after modal closes
  };

  return (
    <div >
      <AdminNavbar />
      <AdminSidebar />
      <div style={{paddingLeft: '200px', paddingTop: '40px'}}>
      <Box mb={2} mt={7} display="flex">
        <Typography variant="h4">Manage Slides</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddSlide}
          sx={{ ml: 2 }}
        >
          + Add Slide
        </Button>
      </Box>
      <Grid container spacing={3}>
        {slides.map((slide) => (
          <Grid item key={slide.id} xs={12} sm={6} md={4}>
            <AdminSlide
              slide={slide}
              onEdit={handleEditSlide}
              onDelete={handleDeleteSlide}
            />
          </Grid>
        ))}
      </Grid>
      </div>
      {/* Conditionally render EditSlideModal when openModal is true and selectedSlide is null */}
      {openModal && !selectedSlide && (
        <EditSlideModal
          slide={null} // Pass null to indicate adding a new slide
          onClose={handleCloseModal}
          onSave={fetchSlides}
        />
      )}
      {/* Conditionally render EditSlideModal when openModal is true and selectedSlide is not null */}
      {openModal && selectedSlide && (
        <EditSlideModal
          slide={selectedSlide}
          onClose={handleCloseModal}
          onSave={fetchSlides}
        />
      )}
    </div>
  );
};

export default Slides;
