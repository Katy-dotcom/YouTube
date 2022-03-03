import axios from "axios";

export const youtube = axios.create({
  // baseURL: "https://www.googleapis.com/youtube/v3",
  baseURL: "https://youtubeapi-proxy.herokuapp.com/api",
  params: {
    // key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: "snippet",
    type: "video",
    maxResults: 8,
  },
});
