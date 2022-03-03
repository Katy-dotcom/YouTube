import React, { useContext } from "react";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import { CardMedia, Box, Typography, Tooltip } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import { SelectedVideoContext } from "../context/selectedVideoContext";
import { FavVideosContext } from "../context/favVideoContext";

const VideoListItem = ({ video }) => {
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
        <Tooltip title={video.snippet.title}>
          <Card
            sx={{
              display: { md: "flex" },
            }}
          >
            <Link
              to={`/video/${video.id}`}
              key={video.id.videoId}
              onClick={() => {
                handleVideoItemClick(video);
              }}
            >
              <CardMedia
                component="img"
                src={video.snippet.thumbnails.medium.url}
                alt="related to the video"
                sx={{ width: { xs: "100%", md: "450px" } }}
              />
            </Link>
            <CardContent
              width="100%"
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
              }}
            >
              <Link
                to={`/video/${video.id}`}
                key={video.id.videoId}
                onClick={() => {
                  handleVideoItemClick(video);
                }}
                style={{ flex: 1 }}
              >
                <Typography
                  sx={{
                    color: "text.primary",
                    height: "100px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "inline-block",
                    // whiteSpace: "nowrap",
                  }}
                >
                  {video.snippet.title}
                </Typography>
              </Link>

              <Box>
                <IconButton
                  sx={{ justifyContent: "flex-start" }}
                  aria-label=""
                  onClick={updateFavArray}
                >
                  {fav ? (
                    <FavoriteOutlinedIcon
                      sx={{ color: red[800] }}
                    ></FavoriteOutlinedIcon>
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ color: red[800] }}
                    ></FavoriteBorderIcon>
                  )}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Tooltip>
      )}
    </>
  );
};

export default VideoListItem;
