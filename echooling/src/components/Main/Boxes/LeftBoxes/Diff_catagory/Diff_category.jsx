import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ButtonHoc from "../../../../HOC/ButtonHoc";


const Diff_category = () => {

const [content,setContent]=useState("");

const onHandleClickDescription=()=>{
      setContent("a")
}


const onHandleClickCurriculum=()=>{
  setContent("b")
}


const onHandleClickReviews=()=>{
  setContent("c")
}


const onHandleClickFAQs=()=>{
  setContent("d")
}


  return (
    <>
    <Box sx={{display:"flex" ,alignItems:"center",justifyContent:"left",gap:"3%", width:"95%",marginTop:"50px",padding:"20px",height:"50px", border:"1px solid rgb(242,244,249)",backgroundColor:"rgb(242,244,249)"}}>
  
      <ButtonHoc el={"Description"} onHandleClickCourse={onHandleClickDescription}/>
      <ButtonHoc el={"Curriculum"} onHandleClickCourse={onHandleClickCurriculum}/>
      <ButtonHoc el={"Reviews"} onHandleClickCourse={onHandleClickReviews}/>
      <ButtonHoc el={"FAQs"} onHandleClickCourse={onHandleClickFAQs}/>
    
  
  
    </Box>

    <Box>
      {content}
    </Box>
    </>
  );
};

export default Diff_category;
