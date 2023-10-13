import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { LayoutO } from './LayoutO';
import { Home } from './Pages/Home';
import { Education } from './Pages/Education';
import { LawyerDashboardUser } from './Pages/LawyerDashboardUser';
import { Login } from './Pages/Login/Login';
import { SignUpLanding } from './Pages/SignUpLanding/SignUpLanding';
import { SignUpUser } from './Pages/SignUpUser/SignUpUser.jsx';
import { Services } from './Pages/Services';
import { SignUpLawyer } from './Pages/SignUpLawyer/SignUpLawyer';


function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Layout/>}>
                    <Route path='' element={<Home/>} />
                </Route>
                <Route exact path="/" element={<LayoutO/>}>
                    <Route path='/education' element={<Education/>} />
                    <Route path='/LawyerDashboardUser' element={<LawyerDashboardUser/>} />
                    <Route path='/Services' element={<Services/>} />
                </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/SignUpLanding' element={<SignUpLanding/>}/>
                <Route path='/SignUpUser' element={<SignUpUser/>}/>
                <Route path='/SignUpLawyer' element={<SignUpLawyer/>}/>
            </Routes>
        </>
    )
}

export default App