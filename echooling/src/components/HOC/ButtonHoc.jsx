import React from 'react'
import {  Button } from "@mui/material";

const ButtonHoc = ({el,onHandleClickCourse}) => {
  return (
    <Button
    onClick={onHandleClickCourse}
    variant="contained"
    color="primary"
    style={{ borderRadius: "4px",backgroundColor:"white" ,color:"black",textTransform:"capitalize",height:"90%"}}
  >{el}</Button>
  )
}

export default ButtonHoc