import { Box, Button } from "@mui/material";
import React from "react";

const Diff_category = () => {
  return (
    <Box sx={{display:"flex" ,alignItems:"center",justifyContent:"left",gap:"3%", width:"100%",marginTop:"50px",padding:"20px",height:"50px", border:"1px solid rgb(242,244,249)",backgroundColor:"rgb(242,244,249)"}}>
      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "4px",backgroundColor:"white" ,color:"black",textTransform:"capitalize",height:"90%"}}
      >Discription</Button>

      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "4px",backgroundColor:"white" ,color:"black",textTransform:"capitalize",height:"90%"}}
      >Curriculum</Button>

      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "4px",backgroundColor:"white" ,color:"black",textTransform:"capitalize",height:"90%"}}
      >Reviews</Button>

      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "4px",backgroundColor:"white" ,color:"black",textTransform:"capitalize",height:"90%"}}
      >FAQs</Button>
    </Box>
  );
};

export default Diff_category;
