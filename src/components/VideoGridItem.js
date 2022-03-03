import React, { useContext } from "react";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import { CardMedia, Typography, Tooltip } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { SelectedVideoContext } from "../context/selectedVideoContext";
import { FavVideosContext } from "../context/favVideoContext";

const VideoGridItem = ({ video }) => {
  const { handleVideoItemClick, lastViewedVideos } =
    useContext(SelectedVideoContext);

  const { favoriteArray, setFavoriteArray } = useContext(FavVideosContext);

  const fav = favoriteArray.some(
    (favoriteVideo) => favoriteVideo.id === video.id
  );

  const updateFavArray = () => {
    let newFavoriteArray = [];
    if (
      //Comprobar si el video existe en el array
      favoriteArray.some((favoriteVideo) => favoriteVideo.id === video.id)
    ) {
      //si existe, eliminarlo del array
      newFavoriteArray = favoriteArray.filter(
        (favoriteVideo) => favoriteVideo.id !== video.id
      );
    } else {
      //si no existe, añadirlo al array
      newFavoriteArray = [...favoriteArray, video];
    }
    // actualizo  el array
    setFavoriteArray(newFavoriteArray);
  };

  return (
    <>
      {video && video.snippet && (
        <Card>
          <Link
            to={`/video/${video.id}`}
            key={video.id.videoId}
            onClick={() => {
              handleVideoItemClick(video);
            }}
          >
            <CardMedia
              component="img"
              image={video.snippet.thumbnails.medium.url}
              alt="related to the video"
            />
            <CardContent>
              <Tooltip title={video.snippet.title}>
                <Typography sx={{ color: "text.primary" }} noWrap>
                  {video.snippet.title}
                </Typography>
              </Tooltip>
            </CardContent>
          </Link>
          <CardActions>
            <IconButton aria-label="" onClick={updateFavArray}>
              {fav ? (
                <FavoriteOutlinedIcon
                  sx={{ color: red[800] }}
                ></FavoriteOutlinedIcon>
              ) : (
                <FavoriteBorderIcon
                  sx={{ color: red[800] }}
                ></FavoriteBorderIcon>
              )}
            </IconButton>{" "}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default VideoGridItem;
