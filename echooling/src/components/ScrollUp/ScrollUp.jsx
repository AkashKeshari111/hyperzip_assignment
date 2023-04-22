import React from 'react'
import { HashLink } from "react-router-hash-link";
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { Box } from '@mui/material';


const ScrollUp = () => {
  return (
    <Box>
    <HashLink to="#course">
    <text>
      <NorthOutlinedIcon sx={{fontSize:"50px",position:"fixed",right:25,bottom:20,zIndex:1000,border:"1px solid gray",borderRadius:"100%",backgroundColor:"white",color:"rgb(129,180,2)"}} />

    </text>
  </HashLink>
  </Box>
  )
}

export default ScrollUp