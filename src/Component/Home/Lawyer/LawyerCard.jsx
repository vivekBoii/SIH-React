import React from 'react';
import { Link } from 'react-router-dom';
import "./LawyerCard.css";

export const LawyerCard = ({ img, name, age, qualification, exp, area, clients, link }) => {
    return (
        <>
            <div className="supreme-lawyer-card">
                <div className="lawyer-card">
                    <img src={img} alt="Lawyer Images" />
                    <div className="info">
                        <p>{name} , <span>{age}</span></p>
                        <div>
                            <p>{qualification}</p>
                            <p>{exp}</p>
                        </div>
                        <div>
                            <p>{area}</p>
                            <p>{clients}</p>
                        </div>
                        <div className='link'><Link to={link}>See Profile</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
