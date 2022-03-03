import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { youtube } from "../Apis/youtube";
import VideoList from "./VideoList";

const RecommendedVideos = ({ videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const getRelatedVideos = async () => {
      try {
        if (videoId) {
          const response = await youtube.get("/search", {
            params: { relatedToVideoId: videoId },
          });
          let videoItems = response.data.items;
          videoItems.forEach(
            (videoItem) => (videoItem.id = videoItem.id.videoId)
          );
          setRelatedVideos(videoItems);
        }
      } catch (err) {
        console.error(`${err}`);
      }
    };
    getRelatedVideos();
  }, [videoId]);

  return (
    <Box>
      <>{relatedVideos && <VideoList videoArray={relatedVideos} />}</>
    </Box>
  );
};
export default RecommendedVideos;
