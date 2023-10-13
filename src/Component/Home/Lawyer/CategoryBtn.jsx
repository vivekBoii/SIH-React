import React from 'react'
import { Link } from 'react-router-dom';
import "./CategoryBtn.css";

export const CategoryBtn = ({ img, text }) => {
    return (
        <>
            <div className="supreme-grid-card">
                <div className="grid-card">
                    <Link to="/services">
                        <div className="image">
                            <img src={img} alt="Category" />
                        </div>
                        <p>{text}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
