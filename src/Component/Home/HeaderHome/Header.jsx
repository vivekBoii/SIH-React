import React from 'react';
import "./Header.css";

export const Header = () => {

    return (
        <>
            <div className="header">
                <div className='headerText'>
                    <p>Legal</p>
                    <p>Expertise</p>
                    <p>At <b>Your</b> Digital</p>
                    <p>Doorstep</p>
                </div>
                <div className="search-field">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for Lawyers , Documents Writers ..." />
                </div>
            </div>
            <div className="sahayata"> 
            <p>Seek for <span>Sahayata</span></p>
<p><span>सहायता</span> की तलाश...</p>
            </div>
        </>
    )
}
