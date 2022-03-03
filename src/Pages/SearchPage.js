import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FavVideosContext } from "../context/favVideoContext";
import { TermFromSearchContext } from "../context/termFromSearchContext";
import { youtube } from "../Apis/youtube";
import VideoList from "../components/VideoList";

const SearchPage = () => {
  const [videoArray, setVideoArray] = useState([]);
  const [lastSearchSelectedVideo, setLastSearchSelectedVideo] = useState("");

  const { termFromSearch, setTermFromSearch } = useContext(
    TermFromSearchContext
  );

  const { condensedList, setCondensedList } = useContext(FavVideosContext);

  const getVideos = async () => {
    const response = await youtube.get("/search", {
      params: { q: termFromSearch },
    });
    let videoItems = response.data.items;
    videoItems.forEach((videoItem) => (videoItem.id = videoItem.id.videoId));
    setVideoArray(videoItems);

    const newCondensedItem = {
      searchedTerm: termFromSearch,
      videos: response.data.items,
      timestamp: Date.now(),
    };
    setCondensedList([newCondensedItem, ...condensedList]);
  };

  useEffect(() => {
    getVideos();
  }, [termFromSearch]);

  const handleLastSearchVideoClick = (videoId) => {
    setLastSearchSelectedVideo(videoId);
  };
  return (
    <Box pt={2} sx={{ flex: "0.80" }}>
      <VideoList videoArray={videoArray} />
    </Box>
  );
};

export default SearchPage;
