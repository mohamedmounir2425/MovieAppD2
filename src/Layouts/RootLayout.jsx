import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Disconnected from '../Components/Disconnected'

export default function RootLayout() {
  return (
    <>
    <Navbar/>
   
    <Outlet/>
      
    </>
  )
}
