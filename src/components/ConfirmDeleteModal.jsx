import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ConfirmDeleteModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-delete-modal-title"
      aria-describedby="confirm-delete-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography id="confirm-delete-modal-title" variant="h6" component="h2">
            Confirmer la suppression
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography id="confirm-delete-modal-description" mb={2}>
          Êtes-vous sûr de vouloir supprimer ce chauffeur ?
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-around">
          <Button variant="contained" color="error" onClick={onConfirm}>
            Oui
          </Button>
          <Button variant="text" color="secondary" onClick={onClose}>
            Annuler
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;
