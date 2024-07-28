import React from 'react';
import { ListItemText, Paper, Typography } from '@mui/material';
import AlertIcon from '@mui/icons-material/ErrorOutline';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';

const NotificationCard = ({ type, text }) => {
  let icon;
  let color;

  switch (type) {
    case 'alert':
      icon = <AlertIcon />;
      color = 'error';
      break;
    case 'warning':
      icon = <WarningIcon />;
      color = 'warning';
      break;
    case 'info':
    default:
      icon = <InfoIcon />;
      color = 'info';
      break;
  }

  return (
    <Paper elevation={3} style={{ padding: 10, display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 10 }}>
        {icon}
      </div>
      <ListItemText primary={<Typography variant="body1" color={color}>{text}</Typography>} />
    </Paper>
  );
};

export default NotificationCard;
