import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const LayoutPage = () => {
  return (
    <div>
        <NavBar/>
          <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayoutPage;
