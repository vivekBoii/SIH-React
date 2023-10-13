import React from 'react';
import Navbar from './Component/Navbar/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Component/Footer/Footer';

export const LayoutO = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
