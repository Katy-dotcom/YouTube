import React, { useContext } from "react";
import Moment from "react-moment";
import ReactRoundedImage from "react-rounded-image";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
import { Button } from "@mui/material";

import { TermFromSearchContext } from "../context/termFromSearchContext";

const CondensedListItem = ({ condensedItem }) => {
  const { termFromSearch, setTermFromSearch } = useContext(
    TermFromSearchContext
  );
  let navigate = useNavigate();

  const loadVideosHandler = () => {
    setTermFromSearch(condensedItem.searchedTerm);
    navigate("/search");
  };

  return (
    <>
      {condensedItem && (
        <Grid
          container
          columnSpacing={1}
          p={2}
          borderRadius={2}
          borderBottom={1}
          borderColor="grey"
        >
          <Grid item md={2} xs={4} display="flex" justifyContent="center">
            <ReactRoundedImage
              roundedSize="0"
              imageWidth="50"
              imageHeight="50"
              image={condensedItem.videos[0].snippet.thumbnails.default.url}
            />
          </Grid>
          <Grid
            item
            md={2}
            xs={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {condensedItem.searchedTerm}
          </Grid>
          <Grid
            item
            md={1}
            sx={{ display: { md: "flex", xs: "none" } }}
            alignItems="center"
            justifyContent="center"
          >
            ·
          </Grid>
          <Grid
            item
            lg={2}
            sx={{ display: { md: "flex", xs: "none" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Moment fromNow>{condensedItem.timestamp}</Moment>
          </Grid>
          <Grid
            item
            lg={2}
            md={1}
            sx={{ display: { md: "flex", xs: "none" } }}
          ></Grid>
          <Grid
            item
            md={3}
            xs={4}
            display="flex"
            alignItems="center"
            justifyContent={"flex-end"}
          >
            <Button
              onClick={loadVideosHandler}
              variant="contained"
              size="small"
              color="error"
              style={{ maxHeight: "40px", fontSize: "12px" }}
            >
              Show videos
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CondensedListItem;
