import React from "react";
import { Container, Stack } from "@mui/material";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videoArray }) => {
  return (
    <Container sx={{ pt: 2 }}>
      <Stack spacing={2}>
        {videoArray &&
          videoArray.map((video) => (
            <VideoListItem key={video.id} video={video} />
          ))}
      </Stack>
    </Container>
  );
};

export default VideoList;
