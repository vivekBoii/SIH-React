import React from 'react';
import { Header } from '../Component/Home/HeaderHome/Header';
import { Services } from '../Component/Home/Services/Services';
import { Lawyer } from '../Component/Home/Lawyer/Lawyer';

export const Home = () => {
  return (
    <>
        <Header/>
        <Services/>
        <Lawyer/>
    </>
  )
}
