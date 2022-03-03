import React from "react";
import Container from "@mui/material/Container";
import SearchHistory from "../components/SearchHistory";

const SearchHistoryPage = ({ handleLastSearchVideoClick }) => {
  return (
    <Container>
      <SearchHistory onClickItem={handleLastSearchVideoClick} />
    </Container>
  );
};

export default SearchHistoryPage;
