import { Box } from "@mui/material";
import React from "react";
import VideoLink from "./LeftBoxes/VideoLink";
import Diff_category from "./LeftBoxes/Diff_catagory/Diff_category";
import RelatedCourses from "./LeftBoxes/RelatedCourses";
import Information from "./RightBoxes/Information/Information";
import CourseCategory from "./RightBoxes/Coursecategory/CourseCategory";

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
      <Box sx={{width:"32%"}}>
        <Information/>
        <CourseCategory/>
      </Box>
    </>
  );
};

export default Boxes;
