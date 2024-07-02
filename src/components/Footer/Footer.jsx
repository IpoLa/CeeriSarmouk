import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const StackColumn = styled(Stack)(({ theme }) => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
        my: 4,
      }}
    >
      <StackColumn>
        <iframe
          title="Google Maps"
          width="300"
          height="200"
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
        <FooterTitle text={'notre entreprise'} />
        <FooterLink text={'rapports'} />
        <FooterLink text={'nous contacter'} />
        <FooterLink text={'gestion'} />
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
              color: '#414141',
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
              color: '#414141',
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
    </BoxRow>
  );
};

export default Footer;
