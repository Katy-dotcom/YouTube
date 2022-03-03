import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const VideoDetail = ({ selectedVideo }) => {
  return (
    <Box sx={{ pt: 2, pl: 2 }}>
      {selectedVideo && (
        <Card>
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            height="400"
          ></CardMedia>
          <CardContent>
            <Typography variant="h5" component="h5">
              {selectedVideo.snippet.title}{" "}
            </Typography>
            <br /> {selectedVideo.snippet.description}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default VideoDetail;
