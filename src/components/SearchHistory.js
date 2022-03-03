import React, { useContext } from "react";
import { Box } from "@mui/system";
import { FavVideosContext } from "../context/favVideoContext";
import CondensedListItem from "./CondensedListItem";

const SearchHistory = ({ onClickItem }) => {
  const { condensedList } = useContext(FavVideosContext);

  return (
    <Box>
      <h4>Last Searches</h4>
      {condensedList &&
        condensedList.map((condensedItem) => (
          <CondensedListItem
            key={condensedItem.timestamp}
            onClickItem={onClickItem}
            condensedItem={condensedItem}
          />
        ))}
    </Box>
  );
};

export default SearchHistory;
