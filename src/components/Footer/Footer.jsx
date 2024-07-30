import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#ededed',
  flex: 1,
  backgroundImage: `url('https://nsa-dz.com/wp-content/uploads/2021/11/bg-footer.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 30,
  },
}));

const StackColumn = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flex: 1,
  gap: 8,
  textAlign: 'center',
  color: '#fff', // Set text color to white for better contrast against the background
}));

const Footer = () => {
  return (
    <FooterContainer
      component="footer"
      sx={{
        py: 6,
        px: 2,
        my: 0,
      }}
    >
      <StackColumn>
        <iframe
          title="Google Maps"
          style={{borderRadius: '15px'}}
          width="350"
          height="250"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.657203465886!2d-0.14185247388575494!3d51.50170855884035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604e4be44937d%3A0x175d71f1a9b6f8cc!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1623455242793!5m2!1sen!2suk"
        ></iframe>
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'nos services'} />
        <FooterLink text={'ETUDE DE DANGERS'} />
        <FooterLink text={'CONCEPTION DES RÉSEAUX ANTI INCENDIE'} />
        <FooterLink text={'ASSISTANCE À L’INVESTISSEMENT'} />
        <FooterLink text={'ASSISTANCE TECHNIQUE'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'CEERI SARMOUK'} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="#"
            variant="body2"
            sx={{
              color: '#fff', // Set icon color to white for better visibility
              '&:hover': {
                color: '#1c2859',
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: '#fff', // Set icon color to white for better visibility
              '&:hover': {
                color: '#1c2859',
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; 2024 Ceeri Sarmouk.
        </Typography>
      </StackColumn>
    </FooterContainer>
  );
};

export default Footer;
