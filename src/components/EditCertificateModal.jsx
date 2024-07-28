import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const EditCertificateModal = ({ open, onClose, certificate, onSave }) => {
  const initialFormData = certificate || {
    title: "",
    description: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    setFormData(certificate || initialFormData);
    if (certificate?.image) {
      setImagePreview(certificate.image);
    }
  }, [certificate, initialFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      image: null,
    }));
    setImagePreview(null);
  };

  const handleSubmit = () => {
    onSave(certificate?.id || null, formData);
    onClose();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={onClose} fullWidth>
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
          {certificate ? "Edit Certificate" : "Add New Certificate"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-image"
              type="file"
              onChange={handleImageChange}
            />
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                {imagePreview ? (
                  <Avatar
                    src={imagePreview}
                    alt="Certificate Preview"
                    sx={{ width: 100, height: 100 }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: "grey.200",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AddIcon />
                  </Box>
                )}
              </Grid>
              {imagePreview && (
                <Grid item>
                  <IconButton onClick={handleRemoveImage}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              )}
              <Grid item>
                <label htmlFor="upload-image">
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px dashed grey",
                      cursor: "pointer",
                    }}
                  >
                    <AddIcon />
                  </Box>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {certificate ? "Save Changes" : "Add Certificate"}
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditCertificateModal;
