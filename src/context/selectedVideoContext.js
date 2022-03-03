import { createContext, useState } from "react";

export const SelectedVideoContext = createContext(null);

export const SelectedVideoProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lastViewedVideos, setLastViewedVideos] = useState([]);

  const handleVideoItemClick = (video) => {
    if (lastViewedVideos.includes(video)) return;
    else {
      setLastViewedVideos([...lastViewedVideos, video]);
    }
  };

  return (
    <SelectedVideoContext.Provider
      value={{
        selectedVideo,
        setSelectedVideo,
        lastViewedVideos,
        setLastViewedVideos,
        handleVideoItemClick,
      }}
    >
      {children}
    </SelectedVideoContext.Provider>
  );
};
