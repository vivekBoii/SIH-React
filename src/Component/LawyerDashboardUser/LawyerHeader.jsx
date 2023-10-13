import React from 'react'
import { Accordian } from './Accordian';
import "./LawyerHeader.css";
import user from "../Images/user.jpg";
import verify from "../Images/verify.png";

export const LawyerHeader = () => {

  const InfoJson = {
    image: "../Images/user.jpg",
    name: "Advocate Jaspreet Singh Rai",
    gender: "male",
    city: "Meerut",
    Age: "23",
    CollegeName: "IIL Meerut",
    LawDegree: "LLB",
    YOC: "2026",
    Experience: "10",
    Cases: "12",
    Language: "English, Hindi, Punjabi",
    Practice: "Anticipatory Bail, Arbitration, Breach of Contract, Cheque Bounce, Civil, Criminal",
    Mobile: "7017094XXX",
    Email: "legalmatch@gmail.com",
    Enrollment: "D/1122/2003",
    Description: ["Mr. Jaspreet S Rai, Advocate, completed his law in the year 2003 and has been providing services in various fields of law, including, but not limited to Civil, Criminal, Arbitration, Labour & Service Matters, Intellectual Property Rights, Trademark, matters relating to Property Law, Copyright, inter-alia, Suits, Writs, Appeals, Revisions, Complaints relating to Debt Recovery, Dishonor of Cheques, Rent Control Act, Cheque Bounce Matters, Matrimonial disputes and drafting and vetting of various agreements, documents, will, MoU, and so on.", "He has extensive knowledge and expertise in consumer matters and has appeared before both SCDRC and NCDRC. He also specialises in corruption and CBI cases, and has dealt extensively in NDPS matters.", "He started his practice with Mr. P.N LEKHI, Sr. Advocate and worked with him for four years, and since 2007 has been practicing and handling cases independently with a result oriented approach, both professionally and ethically."]
  }

  return (
    <>
      <div className="lp-container">
        <div className="lp-content-container">
          <h3 className="lp-heading">{InfoJson.name}</h3>
          <div className="lp-left content-box">
            <img src={user} alt="User" />
          </div>
          <div className="lp-center content-box">
            <div className="lp-fields">
              <div>
                <h3>Gender</h3>
              </div>
              <div>
                <h4>{InfoJson.gender}</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>City</h3>
              </div>
              <div>
                <h4>{InfoJson.city}</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Age</h3>
              </div>
              <div>
                <h4>{InfoJson.Age} years</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Law College Name</h3>
              </div>
              <div>
                <h4>{InfoJson.CollegeName}</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Law Degree</h3>
              </div>
              <div>
                <h4>{InfoJson.LawDegree}</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Year of Completion</h3>
              </div>
              <div>
                <h4>{InfoJson.YOC}</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Experience</h3>
              </div>
              <div>
                <h4>{InfoJson.Experience}+</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>No of Cases</h3>
              </div>
              <div>
                <h4>{InfoJson.Cases}+</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Languages</h3>
              </div>
              <div>
                <h4>{InfoJson.Language}</h4>
              </div>
            </div>
            <div className="lp-fields">
              <div>
                <h3>Practice Area</h3>
              </div>
              <div>
                <h4>{InfoJson.Practice}</h4>
              </div>
            </div>
          </div>
          <div className="lp-right lp-content-box">
            <div className="lp-right-head"><h3>Contact Details</h3></div>
            <div>
              <h4>Mobile Number</h4>
              <p>{InfoJson.Mobile}</p>
            </div>
            <div>
              <h4>Email Address</h4>
              <p>{InfoJson.Email}</p>
            </div>
          </div>
          <div className="lp-buttons">
            <div className="lp-verify">
              <p>Verified</p>
              <img src={verify} alt="Tick" />
            </div>
            <div className="lp-enrollment_number">{InfoJson.Enrollment}</div>
            <div className="lp-right hd-content-box">
              <div className="lp-right-head"><h3>Contact Details</h3></div>
              <div>
                <h4>Mobile Number</h4>
                <p>{InfoJson.Mobile}</p>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>{InfoJson.Email}</p>
              </div>
            </div>
          </div>
          <div className="lp-desc">
            <h3>Description</h3>
            <p>
              {InfoJson.Description[0]}
            </p>
            <p>
              {InfoJson.Description[1]}
            </p>
            <p>
              {InfoJson.Description[2]}
            </p>
          </div>
        </div>
        <Accordian />
      </div>
    </>
  )
}
