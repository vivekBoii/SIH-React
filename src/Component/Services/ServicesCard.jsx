import React from 'react';
import "./ServicesCard.css";


export const ServicesCard = ({link,image,name}) => {
    return (
        <>
            <div className="serv-image-item">
                <a href={link}>
                    <div className="serv-image">
                        <img src={image} alt="img"/>
                    </div>
                    <p>{name}</p>
                </a>
            </div>
        </>
    )
}
