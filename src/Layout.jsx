import React from 'react';
import Navbar from './Component/Navbar/NavbarHome/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Component/Footer/Footer';

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
