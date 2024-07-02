import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDarkMode } from "../context/DarkModeContext";
import colors from "../constants/colors";

const PdfModal = ({ open, onClose, pdfUrl }) => {
const { darkMode } = useDarkMode();
const currentColors = darkMode ? colors.dark : colors.light;
return (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="pdf-modal-title"
    aria-describedby="pdf-modal-description"
  >
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '80vw',  bgcolor: 'background.paper', p: 5,  }}>
      <IconButton
        aria-label="Close"
        onClick={onClose}
        sx={{ position: 'absolute', top: 0, right: 0, color: currentColors.text }}
      >
        <CloseIcon />
      </IconButton>
      <iframe src={pdfUrl} width="100%" height="550px" title="PDF Viewer" />
    </Box>
  </Modal>)
};

export default PdfModal;
