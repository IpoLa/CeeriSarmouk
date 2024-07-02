import React from 'react';
import Button from '@mui/material/Button';
import { Instagram, Facebook, LinkedIn, TikTok } from '@mui/icons-material';

const SocialMediaIcons = () => {
        return (
          <div className="social-media-icons">
            <Button href="#" className="insta-btn">
              <Instagram />
            </Button>
            <Button href="https://www.facebook.com/profile.php?id=100093838957969" className="insta-btn">
              <Facebook />
            </Button>
            <Button href="https://www.linkedin.com/in/zakaria-amrani-tech/" className="insta-btn">
              <LinkedIn />
            </Button>
            <Button href="#" className="insta-btn">
              <TikTok />
            </Button>
          </div>
        );
      };
export default SocialMediaIcons;