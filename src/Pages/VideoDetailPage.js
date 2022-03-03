import React, { useEffect, useState } from "react";
import VideoDetail from "../components/VideoDetail";
import RecommendedVideos from "../components/RecommendedVideos";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { youtube } from "../Apis/youtube";

const VideoDetailPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  let { id } = useParams();

  const getVideo = async () => {
    const response = await youtube.get("/videos", {
      params: { id: id },
    });
    setSelectedVideo(response.data.items[0]);
  };
  useEffect(() => {
    getVideo();
  }, [id]);

  return (
    <Box sx={{ display: "flex" }}>
      <VideoDetail selectedVideo={selectedVideo} />
      <RecommendedVideos videoId={id} />
    </Box>
  );
};
export default VideoDetailPage;
