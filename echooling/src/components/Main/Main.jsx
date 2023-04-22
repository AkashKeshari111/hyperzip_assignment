import { Box } from '@mui/material'
import React from 'react'
import Slider from './Slider/Slider'
import Boxes from './Boxes/Boxes'

const Main = () => {
  return (
    <Box sx={{backgroundColor:"rgb(250,250,250)",marginTop:"54px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Slider/>

        <Box sx={{width:"85%",display:"flex",alignItems:"center",justifyContent:"left", marginTop:"100px"}}>
            <Boxes/>
        </Box>
    </Box>
  )
}

export default Main