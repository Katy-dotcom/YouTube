import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { youtube } from "../Apis/youtube";
import VideoGrid from "../components/VideoGrid";

//al cargar pagina Home, show popularVideos
const Home = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    const getPopularVideos = async () => {
      try {
        const response = await youtube.get("/videos", {
          params: { chart: "mostPopular" },
        });
        setPopularVideos(response.data.items);
      } catch (err) {
        console.error(`${err}`);
      }
    };
    getPopularVideos();
  }, []);

  return (
    <Box pt={2} sx={{ flex: 1 }}>
      <VideoGrid videoArray={popularVideos} />
    </Box>
  );
};

export default Home;
