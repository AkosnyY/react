import React from 'react'
import { BrowserRouter as RouterContainer, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'


export default function Router() {
  return (
    <RouterContainer>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </RouterContainer>
  )
}
