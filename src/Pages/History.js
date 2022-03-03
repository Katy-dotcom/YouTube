import React, { useContext } from "react";
import Container from "@mui/material/Container";
import VideoList from "../components/VideoList";
import { SelectedVideoContext } from "../context/selectedVideoContext";

const History = () => {
  const { lastViewedVideos } = useContext(SelectedVideoContext);

  return (
    <Container>
      <VideoList videoArray={lastViewedVideos} />
    </Container>
  );
};

export default History;
