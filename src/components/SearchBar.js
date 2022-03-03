import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/system";
import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { TermFromSearchContext } from "../context/termFromSearchContext";

const SearchBar = () => {
  const [lookedUpWord, setLookedUpWord] = useState("");

  const { termFromSearch, setTermFromSearch } = useContext(
    TermFromSearchContext
  );
  let navigate = useNavigate();

  const searchInputHandler = (e) => {
    setLookedUpWord(e.target.value);
  };

  const searchButtonHandler = () => {
    setTermFromSearch(lookedUpWord);
    setLookedUpWord("");
    navigate("/search");
  };

  const keypressHandler = (e) => {
    if (e.keyCode === 13) {
      searchButtonHandler();
    }
  };

  return (
    <Box mx={10} sx={{ display: "flex", flex: 1, alignItems: "center" }}>
      <Input
        type="text"
        placeholder="Search"
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: { xs: "90px", md: "auto" },
          pl: 2,
        }}
        onChange={searchInputHandler}
        value={lookedUpWord}
        onKeyDown={keypressHandler}
      />

      <IconButton
        size="small"
        sx={{ backgroundColor: "grey.700", borderRadius: 1 }}
        onClick={searchButtonHandler}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
export default SearchBar;
