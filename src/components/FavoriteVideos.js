import React, { useContext } from "react";
import { FavVideosContext } from "../context/favVideoContext";
import VideoList from "./VideoList";

const FavoriteVideos = () => {
  const { favoriteArray } = useContext(FavVideosContext);

  return (
    <>
      {favoriteArray && (
        <VideoList videoArray={favoriteArray}>Favorite Videos</VideoList>
      )}
    </>
  );
};

export default FavoriteVideos;
