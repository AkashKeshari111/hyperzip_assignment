import { Box } from "@mui/material";
import React from "react";

const VideoLink = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/e5Hc2B50Z7c"
        title="Education of School Intro Video for No Copyright free download"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Box>
  );
};

export default VideoLink;
