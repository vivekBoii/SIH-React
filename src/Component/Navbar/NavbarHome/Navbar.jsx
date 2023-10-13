import React, { useState, useEffect, useCallback } from 'react';
import "./Navbar.css";
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {

    const [predis, nowdis] = useState(false);
    const location = useLocation();
    let bgHoverActive, bgColor;
    // const isDesktop = useMediaQuery('(min-width: 1014px)');

    bgHoverActive = "#6f614a";
    bgColor = "transparent";

    // isDesktop ? useState(false) : useState(true)

    // media 
    //window resize code
    const [windowWidth, setWindowWidth] = useState(1600);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, [])


    return (
        <React.Fragment>
            <nav style={{ background: `${windowWidth >= 1016 ? "transparent" : !predis ? bgColor : "#6f614a"}` }}>
                <div className="logo">Legal Match</div>
                {(windowWidth > 1016 ? true : predis) && <ul id='ulEle'>
                    <li><NavLink onClick={()=>{nowdis(true)}} className={`${location.pathname === "/" ? "active" : ""}`}
                        to="/"
                    >Home</NavLink></li>

                    <li><NavLink onClick={()=>{nowdis(true)}} className={`${location.pathname === "/education" ? "active" : ""}`}
                        to="/education"
                    >Education</NavLink></li>

                    <li><NavLink onClick={()=>{nowdis(true)}} className={`${location.pathname === "/services" ? "active" : ""}`}
                        to="/services"
                    >Services</NavLink></li>

                    <li><NavLink onClick={()=>{nowdis(true)}} className={`${location.pathname === "/about" ? "active" : ""}`}
                        to="/about"
                    >About</NavLink></li>

                    <li><NavLink onClick={()=>{nowdis(true)}} className={`${location.pathname === "/SignUpLanding" ? "active" : ""}`}
                        to="/SignUpLanding"
                    >Sign Up</NavLink></li>

                    <li><NavLink onClick={()=>{nowdis(true)}} className={`${location.pathname === "/login" ? "active" : ""}`}
                        to="/login"
                    >Login</NavLink></li>
                </ul>
                }
                <div className="checkbtn">
                    <MenuIcon onClick={() => { nowdis(!predis) }} style={{ fontSize: '3rem', marginTop: 12 }} />
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar