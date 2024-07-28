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
import EditFaqModal from "../components/EditFaqModal"; // Assuming you have a modal for editing FAQs
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';

export default function Faqs() {
  const [faqs, setFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [faqToDelete, setFaqToDelete] = useState(null);

  // Fetch FAQs from backend
  const fetchFaqs = async () => {
    try {
      const response = await fetch('https://www.ceerisarmouk.com/faqs.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch FAQs');
      }
      const data = await response.json();
      setFaqs(data); // Update state with fetched FAQs

      console.log(faqs)
    } catch (error) {
      console.error('Error fetching FAQs:', error.message);
    }
  };

  // Function to add a new FAQ
  const addFaq = async (faqData) => {
    try {
      const response = await fetch('https://ceerisarmouk.com/faqs.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(faqData),
      });
      if (!response.ok) {
        throw new Error('Failed to add FAQ');
      }
      const responseData = await response.json();
      console.log(responseData.message); // Log success message
      fetchFaqs(); // Refresh the list of FAQs
    } catch (error) {
      console.error('Error adding FAQ:', error.message);
    }
  };

  // Function to update an existing FAQ
  const updateFaq = async (id, updatedData) => {
    try {
      const response = await fetch(`https://ceerisarmouk.com/faqs.php?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update FAQ');
      }
      const responseData = await response.json();
      console.log(responseData.message); // Log success message
      fetchFaqs(); // Refresh the list of FAQs
    } catch (error) {
      console.error('Error updating FAQ:', error.message);
    }
  };

  // Function to delete a FAQ
  const deleteFaq = async (id) => {
    try {
      const response = await fetch('https://ceerisarmouk.com/faqs.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete FAQ');
      }
      const responseData = await response.json();
      console.log(responseData.message); // Log success message
      setFaqs(faqs.filter(faq => faq.id !== id)); // Update state after successful delete
    } catch (error) {
      console.error('Error deleting FAQ:', error.message);
    }
  };

  // Fetch FAQs on component mount
  useEffect(() => {
    fetchFaqs();
  }, []);

  // Handler for editing a FAQ
  const handleEdit = (faq) => {
    setSelectedFaq(faq);
    setModalOpen(true);
  };

  // Handler for adding a new FAQ
  const handleAdd = () => {
    setSelectedFaq(null); // Clear selected FAQ if any
    setModalOpen(true);
  };

  // Handler for deleting a FAQ
  const handleDelete = (id) => {
    setFaqToDelete(id);
    setOpenDeleteModal(true);
  };

  // Confirm delete action for FAQ
  const confirmDelete = async () => {
    await deleteFaq(faqToDelete);
    setOpenDeleteModal(false); // Close delete modal
  };

  // Handler for closing edit modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFaq(null); // Clear selected FAQ
  };

  // Handler for saving edited FAQ or adding new FAQ
  const handleSave = async (id, updatedData) => {
    if (id) {
      // Update existing FAQ
      await updateFaq(id, updatedData);
    } else {
      // Add new FAQ
      await addFaq(updatedData);
    }
    handleCloseModal(); // Close modal after save
  };

  // Handler for filtering FAQs based on search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery)
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
          label="Search by question"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Box>

      {/* Add FAQ button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ ml: 2 }}
      >
        + Add FAQ
      </Button>

      <br />
      <br />

      {/* FAQs table */}
      <TableContainer component={Paper}>
        <Table aria-label="FAQs table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Answer</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFaqs.map((faq) => (
              <TableRow key={faq.id}>
                <TableCell>{faq.id}</TableCell>
                <TableCell>{faq.question}</TableCell>
                <TableCell>{faq.answer}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(faq)}>
                      <EditIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(faq.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit FAQ modal */}
      {selectedFaq && (
        <EditFaqModal
          open={isModalOpen}
          onClose={handleCloseModal}
          faq={selectedFaq}
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
