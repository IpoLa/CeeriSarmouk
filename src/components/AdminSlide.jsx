import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Grid,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminSlide = ({ slide, onEdit, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Grid container justifyContent="center">
        <Avatar
          src={slide.image}
          alt={slide.alt}
          variant="square"
          sx={{ width: 300, height: 200 }}
        />
      </Grid>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {slide.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {slide.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(slide)}>
          <EditIcon />
          Edit
        </Button>
        <Button size="small" onClick={() => onDelete(slide.id)}>
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdminSlide;
