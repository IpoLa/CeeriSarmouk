import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const EditSlideModal = ({ slide, onClose, onSave }) => {
  // Initialize formData with empty values when slide is null
  const initialFormData = slide
    ? {
        image: slide.image || "",
        alt: slide.alt || "",
        label: slide.label || "",
        text: slide.text || "",
      }
    : {
        image: "",
        alt: "",
        label: "",
        text: "",
      };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const url = slide
      ? `https://ceerisarmouk.com/getSlides.php?id=${slide.id}`
      : `https://ceerisarmouk.com/getSlides.php`;
    const method = slide ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      onSave();
      onClose();
    } else {
      console.error("Failed to save slide");
      // Handle error scenario (e.g., show error message)
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Adjusted to use slide existence to control modal open state
  const isOpen = Boolean(slide);

  return (
    <Modal open={isOpen} onClose={onClose} fullWidth>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "90%" : "600px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          overflowY: "auto",
          maxHeight: "90vh",
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          {slide ? "Edit Slide" : "Add New Slide"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Image URL"
              name="image"
              value={formData?.image}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Alt Text"
              name="alt"
              value={formData?.alt}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Label"
              name="label"
              value={formData.label}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleSave}>
            {slide ? "Save Changes" : "Add Slide"}
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditSlideModal;
