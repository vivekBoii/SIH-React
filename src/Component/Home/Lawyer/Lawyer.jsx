import React from 'react';
import "./Lawyer.css";
import { LawyerCard } from './LawyerCard';
import { CategoryBtn } from './CategoryBtn';
import user from "../../Images/user.jpg";
import family from '../../Images/family.png';
import civil from '../../Images/civil-right.png';
import briefcase from '../../Images/briefcase.png';
import handcuffs from '../../Images/handcuffs.png';
import passport from '../../Images/passport.png';
import save from '../../Images/save-the-world.png';
import tax from '../../Images/tax.png';
import plus from '../../Images/plus.png';

export const Lawyer = () => {
    return (
        <>
            <div className="lawyer">
                <h2 >Find Lawyer By Service Area</h2>
                <div className="supreme-lawyer-card-container">
                    <div className="lawyer-card-container">
                        <LawyerCard img={user} name={"Username"} age={"23"} qualification={"Qualification"} exp={"Experience"} area={"Area"} clients={"Clients"} link={"/LawyerDashboardUser"} />
                        <LawyerCard img={user} name={"Username"} age={"23"} qualification={"Qualification"} exp={"Experience"} area={"Area"} clients={"Clients"} link={"/LawyerDashboardUser"} />
                        <LawyerCard img={user} name={"Username"} age={"23"} qualification={"Qualification"} exp={"Experience"} area={"Area"} clients={"Clients"} link={"/LawyerDashboardUser"} />
                        <LawyerCard img={user} name={"Username"} age={"23"} qualification={"Qualification"} exp={"Experience"} area={"Area"} clients={"Clients"} link={"/LawyerDashboardUser"} />
                    </div>
                </div>
                <div className="supreme-category-btn">
                    <div className="category-btn">
                        <CategoryBtn img={family} text={"Family"} />
                        <CategoryBtn img={civil} text={"Civil Rights"} />
                        <CategoryBtn img={briefcase} text={"Croporate"} />
                        <CategoryBtn img={handcuffs} text={"Criminal"} />
                        <CategoryBtn img={passport} text={"Immigration"} />
                        <CategoryBtn img={save} text={"Environmental"} />
                        <CategoryBtn img={tax} text={"Tax"} />
                        <CategoryBtn img={plus} text={"See more"} />
                    </div>
                </div>
            </div>
        </>
    )
}
