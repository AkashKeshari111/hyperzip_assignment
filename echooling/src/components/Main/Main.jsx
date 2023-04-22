import { Box } from '@mui/material'
import React from 'react'
import Slider from './Slider/Slider'
import Boxes from './Boxes/Boxes'

const Main = () => {
  return (
    <Box sx={{backgroundColor:"rgb(250,250,250)",marginTop:"54px" ,marginBottom:"100px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Slider/>

        <Box sx={{width:"85%",display:"flex",alignItems:"start",justifyContent:"space-evenly", marginTop:"80px", "@media (max-width: 850px)":{display:"block"} ,}}>
            <Boxes/>
        </Box>
    </Box>
  )
}

export default Main