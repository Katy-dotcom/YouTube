import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TermFromSearchProvider } from "./context/termFromSearchContext";
import { FavVideosProvider } from "./context/favVideoContext";
import { SelectedVideoProvider } from "./context/selectedVideoContext";

ReactDOM.render(
  <React.StrictMode>
    <SelectedVideoProvider>
      <FavVideosProvider>
        <TermFromSearchProvider>
          <App />
        </TermFromSearchProvider>
      </FavVideosProvider>
    </SelectedVideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
