import React from 'react';
import "./ServicesSlidercard.css";
import { Link } from 'react-router-dom';

export const ServicesSlidercard = ({path,img,text}) => {
    return (
        <>
            <div className="image-item">
                <Link to={path}>
                    <img src={img} alt="image" />
                    <div className="text">
                        <p>{text}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
