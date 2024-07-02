import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Title from './Title';

const VideoSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          setInView(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      className="row py-0 align-items-center justify-content-center text-center"
      sx={{
        py: 5,
        backgroundColor: '#000',
        height: inView ? '100vh' : '50vh',
        transition: 'height 0.7s ease-in',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
      <Grid item xs={12} md={6} lg={5} className="fade-in px-5 py-5">
        <video
          ref={videoRef}
          width="100%"
        //   height="20%"
          src={`${process.env.PUBLIC_URL}/video.mp4`}
          title="Video"
          loop
          muted
          style={{
            width: '100%',
            height: inView ? '90vh' : '50vh',
            transition: 'height 0.5s ease-in',
            // objectFit: 'contain',
          }}
        ></video>
        <Typography
          variant="h2"
          className="color-white d-md-block d-none"
          sx={{
            color: 'white',
            display: { xs: 'none', md: 'block' },
            fontSize: inView ? '3rem' : '2rem', // Change text size based on scroll
            transition: 'font-size 0.5s ease-in-out',
            position: 'absolute',
            top: '20%',
          }}
        >
          Choix de premier ordre
        </Typography>
        <Typography
          variant="h4"
          className="color-white d-md-block d-none"
          sx={{
            color: 'white',
            display: { xs: 'none', md: 'block' },
            fontSize: inView ? '2rem' : '1.5rem', // Change text size based on scroll
            transition: 'font-size 0.5s ease-in-out',
            position: 'absolute',
            top: '30%',
          }}
        >
          Notre storie
        </Typography>
      </Grid>
    </Box>
  );
};

export default VideoSection;
