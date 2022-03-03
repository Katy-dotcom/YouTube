import "./App.css";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./Layout/Header";
import SideBar from "./Layout/SideBar";
import Home from "./Pages/Home";
import FavoriteVideos from "./Pages/FavoriteVideos";
import History from "./Pages/History";
import VideoDetailPage from "./Pages/VideoDetailPage";
import SearchHistoryPage from "./Pages/SearchHistoryPage";
import SearchPage from "./Pages/SearchPage";
import { ThemeProvider } from "@emotion/react";
import { green, orange, red, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material/";

//https://www.youtube.com/watch?v=o1chMISeTC0&ab_channel=LaithHarb MUI tutorial

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
      dark: "#80632e",
      darker: "#80632e",
    },
    secondary: {
      main: green[100],
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    typography: {
      allVariants: {
        color: "#000000",
      },
    },
    action: {
      active: "#000000",
      activatedOpacity: 1,
    },
    background: {
      default: grey[100],
      paper: "#FFFFFF",
    },
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[700],
      dark: "#80632e",
      darker: "#80632e",
    },
    secondary: {
      main: green[800],
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
    typography: {
      allVariants: {
        color: "#FFFFFF",
      },
    },
    action: {
      active: "#FFFFFF",
      activatedOpacity: 1,
    },
    background: {
      default: grey[800],
      paper: grey[800],
    },
  },
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [isOpenMenu, setIsOpenMenu] = useState(true);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <CssBaseline />

      <Box>
        <Router>
          <Header
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
          <Box sx={{ display: "flex" }}>
            <SideBar isOpenMenu={isOpenMenu} />
            {/* <Container pl={2} sx={{ flex: "0.83" }}> */}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="favorite" element={<FavoriteVideos />} />

              <Route path="video/:id" element={<VideoDetailPage />} />
              <Route path="history" element={<History />} />
              <Route path="searchHistory" element={<SearchHistoryPage />} />
              <Route path="search" element={<SearchPage />} />
            </Routes>
            {/* </Container> */}
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
