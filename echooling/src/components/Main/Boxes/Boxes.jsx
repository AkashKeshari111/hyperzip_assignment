import { Box } from "@mui/material";
import React from "react";
import VideoLink from "./LeftBoxes/VideoLink";
import Diff_category from "./LeftBoxes/Diff_catagory/Diff_category";
import RelatedCourses from "./LeftBoxes/RelatedCourses";

const Boxes = () => {
  return (
    <>
      {/* //left-box */}
      <Box sx={{width:"60%"}}>
        <VideoLink/>
        <Diff_category/>
        <RelatedCourses/>
      </Box>

      {/* //right-box */}
      <Box></Box>
    </>
  );
};

export default Boxes;
