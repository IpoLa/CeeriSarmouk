import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Box,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCertificateModal from "../components/EditCertificateModal"; // Assuming you have a modal for editing certificates
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [certificateToDelete, setCertificateToDelete] = useState(null);

  // Function to fetch certificates from backend
  const fetchCertificates = async () => {
    try {
      const response = await fetch('https://ceerisarmouk.com/crud_certificates.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch certificates');
      }
      const data = await response.json();
      setCertificates(data); // Update state with fetched certificates
    } catch (error) {
      console.error('Error fetching certificates:', error.message);
      // Handle error state if needed
    }
  };

  // Function to add a new certificate
  const addCertificate = async (certificateData) => {
    try {
      const response = await fetch('https://ceerisarmouk.com/crud_certificates.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(certificateData),
      });
      if (!response.ok) {
        throw new Error('Failed to add certificate');
      }
      const responseData = await response.json();
      console.log(responseData.message); // Log success message
      // Optionally update state or handle success action
    } catch (error) {
      console.error('Error adding certificate:', error.message);
      // Handle error state if needed
    }
  };

  // Function to update an existing certificate
  const updateCertificate = async (id, updatedData) => {
    try {
      const response = await fetch(`https://ceerisarmouk.com/crud_certificates.php?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update certificate');
      }
      const responseData = await response.json();
      console.log(responseData.message); // Log success message
      // Optionally update state or handle success action
    } catch (error) {
      console.error('Error updating certificate:', error.message);
      // Handle error state if needed
    }
  };

  // Function to delete a certificate
  const deleteCertificate = async (id) => {
    try {
      const response = await fetch('https://ceerisarmouk.com/crud_certificates.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete certificate');
      }
      const responseData = await response.json();
      console.log(responseData.message); // Log success message
      // Optionally update state or handle success action
    } catch (error) {
      console.error('Error deleting certificate:', error.message);
      // Handle error state if needed
    }
  };

  // Fetch certificates on component mount
  useEffect(() => {
    fetchCertificates();
  }, []);

  // Handler for editing a certificate
  const handleEdit = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  // Handler for adding a new certificate
  const handleAdd = () => {
    setSelectedCertificate(null); // Clear selected certificate if any
    setModalOpen(true);
  };

  // Handler for deleting a certificate
  const handleDelete = (id) => {
    setCertificateToDelete(id);
    setOpenDeleteModal(true);
  };

  // Confirm delete action for certificate
  const confirmDelete = async () => {
    try {
      const response = await fetch('http://your-api-endpoint', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: certificateToDelete }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete certificate');
      }
      // Update state after successful delete
      setCertificates(certificates.filter(certificate => certificate.id !== certificateToDelete));
      setOpenDeleteModal(false); // Close delete modal
    } catch (error) {
      console.error('Error deleting certificate:', error.message);
      // Handle error state if needed
    }
  };

  // Handler for closing edit modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null); // Clear selected certificate
  };

  // Handler for saving edited certificate or adding new certificate
  const handleSave = async (id, updatedData) => {
    try {
      if (id) {
        // Update existing certificate
        await updateCertificate(id, updatedData);
        // Update local state with updated certificate
        setCertificates(certificates.map(certificate => certificate.id === id ? updatedData : certificate));
      } else {
        // Add new certificate
        await addCertificate(updatedData);
        // Fetch updated list of certificates
        fetchCertificates();
      }
      handleCloseModal(); // Close modal after save
    } catch (error) {
      console.error('Error saving certificate:', error.message);
      // Handle error state if needed
    }
  };

  // Handler for filtering certificates based on search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter certificates based on search query
  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <AdminNavbar />
      <AdminSidebar />
      <div style={{paddingLeft: '200px', paddingTop: '40px'}}>
      {/* Search input */}
      <Box mb={2} mt={7} display="flex">
        <TextField
          fullWidth
          label="Search by title"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Box>

      {/* Add certificate button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ ml: 2 }}
      >
        + Add Certificate
      </Button>

      <br />
      <br />

      {/* Certificates table */}
      <TableContainer component={Paper}>
        <Table aria-label="Certificates table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCertificates.map((certificate) => (
              <TableRow key={certificate.id}>
                <TableCell>{certificate.id}</TableCell>
                <TableCell>{certificate.title}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(certificate)}>
                      <EditIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(certificate.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit certificate modal */}
      {selectedCertificate && (
        <EditCertificateModal
          open={isModalOpen}
          onClose={handleCloseModal}
          certificate={selectedCertificate}
          onSave={handleSave}
        />
      )}

      {/* Confirm delete modal */}
      <ConfirmDeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
      />
      </div>
    </div>
  );
}
