import React, { useState } from 'react';
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import FullScreenCarousel from '../components/FullScreenCarousel';
import { Popover, Button, IconButton, TextField, Typography, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AlgeriaMapWithPopover from '../components/AlgeriaMap';
import Certificates from '../components/Certificates';

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const slides = [
    {
      image: 'https://ceerisarmouk.com/wp-content/uploads/2019/11/photo-1516937941344-00b4e0337589-1.jpeg',
      alt: 'CEERI SARMOUK',
      label: 'CEERI SARMOUK',
      text: "Cabinet d’Etudes environnementales et Risques Industriels."
    },
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg',
      alt: 'Second slide',
      label: 'Second slide label',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg',
      alt: 'Third slide',
      label: 'Third slide label',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];

  return (
    <>
      <FullScreenCarousel slides={slides} />
      <Certificates />
      <GetStarted />
      <GetInTouch />
      <div className='justify-content-center align-items-center m-3 border-1 d-flex'>
        <AlgeriaMapWithPopover />
      </div>
      <IconButton
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px'
        }}
      >
        <EmailIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: 300 }}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Submit
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default Home;
