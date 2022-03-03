import React from "react";
import { NavLink } from "react-router-dom";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import MuiListItemButton from "@mui/material/ListItemButton";

const ListItemButton = styled(MuiListItemButton)({
  "&.active .MuiTypography-root": {
    fontWeight: "bold",
  },
});

const SideBar = ({ isOpenMenu }) => {
  const menuItems = [
    { link: "/", icon: <HomeIcon />, name: "Home" },
    {
      link: "history",
      icon: <HistoryIcon />,
      name: "History",
    },
    {
      link: "favorite",
      icon: <FavoriteIcon />,
      name: "Liked videos",
    },
    {
      link: "searchHistory",
      icon: <SearchIcon />,
      name: "Search history",
    },
  ];

  return (
    <List
      sx={{
        height: "100vh",
        flexBasis: isOpenMenu ? "250px" : "70px",
        backgroundColor: "primary.main",
      }}
    >
      {menuItems.map((item) => (
        <ListItem disablePadding key={item.name}>
          <ListItemButton component={NavLink} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              sx={{
                color: "text.primary",
                display: isOpenMenu ? "block" : "none",
              }}
            >
              {item.name}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
