import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoursePage from '../pages/CoursePage'

const AllRoutes = () => {


  return (
    <Routes>
        <Route path="/" element={<CoursePage/>}/>
    </Routes>
  )
}

export default AllRoutes