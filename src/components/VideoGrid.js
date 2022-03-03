import React from "react";
import Grid from "@mui/material/Grid";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = ({ videoArray }) => {
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      sx={{
        pb: 2,
        pr: 2,
      }}
    >
      {videoArray &&
        videoArray.map((video) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={video.id}>
            <VideoGridItem video={video} />
          </Grid>
        ))}
    </Grid>
  );
};

export default VideoGrid;
