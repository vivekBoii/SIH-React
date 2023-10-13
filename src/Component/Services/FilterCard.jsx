import React from 'react';
import "./FilterCard.css";
import { Link } from 'react-router-dom';

export const FilterCard = ({src,name,year,location,degree,urating,client,area}) => {
    return (
        <>
            <div className="filter-lawyerProfile">
                <div className="filter-profileImg">
                    <img src={src} alt="img" />
                    <div className="filter-profileText">
                        <h3>{name}</h3>
                        <p>Experience : {year} years</p>
                        <p>Location   : {location}</p>
                        <p>Degree     : {degree}</p>
                    </div>
                </div>
                <div className="filter-rightBox">
                    <p>⭐⭐⭐⭐⭐ {urating}+ | {client}+ Client</p>
                    <p><b>Practice Area</b> : {area}</p>
                    <Link className="filter-btn" to="/LawyerDashboardUser">See Profile</Link>
                </div>
            </div>
        </>
    )
}

