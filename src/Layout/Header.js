import React from "react";
import { Link } from "react-router-dom";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { AppBar, FormGroup, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import { Switch } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MuiLink from "@mui/material/Link";

import SearchBar from "../components/SearchBar";
import youtubeLogo from "../assets/youtubeLogo.svg";
import youtubeLogoDark from "../assets/youtubeLogoDark.svg";
import avatar from "../assets/avatar.jpg";

const Header = ({ isDarkTheme, setIsDarkTheme, isOpenMenu, setIsOpenMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            edge="start"
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Link to="/">
              <img
                src={isDarkTheme ? youtubeLogoDark : youtubeLogo}
                alt="youtube logo"
                style={{ width: "180px", height: "40px" }}
              />
            </Link>
          </Box>
        </Box>
        <SearchBar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkTheme}
                  onChange={() => setIsDarkTheme(!isDarkTheme)}
                />
              }
              label={
                <Typography sx={{ display: { md: "flex", xs: "none" } }}>
                  Dark Theme
                </Typography>
              }
            />
          </FormGroup>

          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <IconButton>
              <VideoCallIcon />
            </IconButton>

            <IconButton>
              <AppsIcon />
            </IconButton>

            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>

          <Tooltip title="Hire me">
            <IconButton onClick={handleClick}>
              <Avatar alt="Katerina Kocakova" src={avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  backgroundColor: "background.paper",
                  color: "text.primary",

                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Typography>
              <MenuItem>
                <MuiLink
                  href="https://github.com/Katy-dotcom"
                  sx={{ color: "text.primary" }}
                >
                  GitHub
                </MuiLink>
              </MenuItem>
              <MenuItem>
                <MuiLink
                  href="https://www.linkedin.com/in/katerina-kocakova/"
                  sx={{ color: "text.primary" }}
                >
                  LinkedIn
                </MuiLink>
              </MenuItem>
            </Typography>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
