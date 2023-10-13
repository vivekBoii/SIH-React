import React from 'react';
import "./Services.css";
import { Card } from './Card';
import consulting from "../../Images/consulting.png";
import lawyer from "../../Images/lawyer.png";
import contract from "../../Images/contract.png";
import property from "../../Images/property.png";

export const Services = () => {
    return (
        <>
            <div className="services">
                <h2>Services</h2>
                <div className="card-container">
                    <Card Img={consulting} Etext={"Online Consultation"} Htext={"ऑनलाइन परामर्श"} />
                    <Card Img={lawyer} Etext={"Lawyer"} Htext={"वकील"} />
                    <Card Img={contract} Etext={"Document Writers"} Htext={"दस्तावेज़ लेखक"} />
                    <Card Img={property} Etext={"Property"} Htext={"संपत्ति"} />
                </div>
            </div>
        </>
    )
}
