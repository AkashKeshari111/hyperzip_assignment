import { Box } from '@mui/material'
import React from 'react'


const courseCategory=["Art & Design(6)","Exercise(4)","Photography(8)","Environmental Science(3)","Software Training(5)","SoftwareDevelopment(2)","Music(10)","Material Design(2)","technology(7)"]

const CourseCategory = () => {
  return (
<Box sx={{border:"1px solid lightGray",marginTop:"20px",padding:"20px 60px"}}>
    <h3 style={{textAlign:"left"}}>Course categories</h3>
    {courseCategory.map((el)=>{
        return(
            <ul style={{listStyleType:"none",textAlign:"left",paddingLeft:"0px",color:"rgb(111,114,128)"}}>
                <li>{el}</li>
            </ul>
        )
    })}
</Box>
  )
}

export default CourseCategory