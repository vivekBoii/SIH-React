import React from 'react';
import "./SignUpLawyer.css";

export const SignUpLawyer = () => {

  const formSteps = document.querySelectorAll(".ls-form-container");
  let formStepsNum = 0;

  const next = () => {
      formStepsNum++;
      updateFormSteps();
    }

  const pre = () => {
      formStepsNum--;
      updateFormSteps();
    }

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("ls-form-active") &&
        formStep.classList.remove("ls-form-active");
    });

    formSteps[formStepsNum].classList.add("ls-form-active");
  }

  
  return (
    <>
      <div className="ls-main-container">
        <div className="ls-left-container">
          <h1>Hey , </h1>
          <p>Help us to create your profile by telling us a bit about yourself</p>
          <div className="ls-spacer"></div>
          <img src="Images/logo.png" alt="Working Proffesional" />
        </div>
        <div className="ls-right-container">
          <div className="ls-form-container ls-form-active">
            <h3 className="ls-step">Step 1</h3>
            <h1 className="ls-main-heading">Personal Information</h1>
            <form action="" className="ls-form" autoComplete="off">
              <label for="username">Full Name</label>
              <input type="text" name="username" placeholder="Ex- Pankaj Kumar" id="username" required />

              <label for="Age">Age</label>
              <input type="number" name="Age" placeholder="Ex- 35" id="Age" required />

              <label for="Gender">Gender</label>
              <select name="Gender" id="gender">
                <option value="llb">Male</option>
                <option value="llm">Female</option>
                <option value="jd">others</option>
              </select>

              <label for="Email">Email</label>
              <input type="email" name="Email" placeholder="xxx@gmail.com" id="Email" required />

              <label for="Phone">Phone</label>
              <input type="tel" name="Phone" placeholder="xxx xxx xxxxx" id="Phone" required />

              <label for="Set-Password">Set Password</label>
              <input type="password" name="set-password" id="set-password" placeholder="ex- P@nk1j" required />

              <label for="fav-sports">Address</label>
              <input type="password" name="confirm-Password" placeholder="Ex- Sadar Nagar, Gajraula, Uttar-Pradesh" id="confirm-Password" required />

              <label for="city">Pincode</label>
              <input type="text" name="city" id="city" placeholder="######" required />
              <div className="ls-">
                <a href="#" onClick={next} className="ls-btn btn-next width-50 ml-auto">Next</a>
              </div>
            </form>
          </div>
          <div className="ls-form-container">
            <h3 className="ls-step">Step 2</h3>
            <h1 className="ls-main-heading">Educational Information</h1>
            <form action="" className="ls-form" autoComplete="off">

              <label for="College-name">Law College name</label>
              <input type="text" name="College-name" placeholder="Ex- ABC College" id="College-name" required />

              <label for="law-degree">Law degree</label>
              <select name="law-degree" id="law-degree">
                <option value="llb">LL.B.</option>
                <option value="llm">LL.M.</option>
                <option value="jd">J.D.</option>
                <option value="jsd">J.S.D</option>
                <option value="bcl">B.C.L</option>
                <option value="m-jur">M.Jur</option>
                <option value="d-jur">D.Jur</option>
              </select>

              <label for="year">Year of Completion</label>
              <input type="number" name="year" id="year" required />
              <div className="ls-btns-group">
                <a href="#" onClick={pre} className="ls-btn btn-prev">Previous</a>
                <a href="#" onClick={next} className="ls-btn btn-next">Next</a>
              </div>
            </form>
          </div>
          <div className="ls-form-container">
            <h3 className="ls-step">Step 3</h3>
            <h1 className="ls-main-heading">Professional Information</h1>
            <form action="" className="ls-form" autoComplete="off">

              <label for="practice-area">Practise-Area</label>
              <input type="text" name="practice-area" id="practice-area" required />

              <label for="experience">Years of Experience</label>
              <input type="number" min="0" name="experience" id="experience" required />

              <label for="cases">No of Previous Cases</label>
              <input type="number" min="0" name="cases" id="cases" required />
              <div className="ls-btns-group">
                <a href="#" onClick={pre} className="ls-btn btn-prev">Previous</a>
                <a href="#" onClick={next} className="ls-btn btn-next">Next</a>
              </div>
            </form>
          </div>
          <div className="ls-form-container" autoComplete="off">
            <h3 className="ls-step">Step 4</h3>
            <h1 className="ls-main-heading">Upload documents</h1>
            <form action="" className="ls-form">

              <label for="aadhar" className="ls-file-label">Aadhar Card <i className="fa-solid fa-upload"></i></label>
              <input type="file" name="aadhar" id="aadhar" accept="application/pdf" className="ls-file" required />

              <label for="law-degree-pdf" className="ls-file-label">Law Degree <i className="fa-solid fa-upload"></i></label>
              <input type="file" name="law-degree-pdf" id="law-degree-pdf" accept="application/pdf" className="ls-file" required />

              <label for="Top-5-Case" className="ls-file-label">Copy of Top 5-Cases<i className="fa-solid fa-upload"></i></label>
              <input type="file" name="casesnum" id="casesnum" accept="application/pdf" className="ls-file" required />

              <label for="Top-5-Case" className="ls-file-label">NewsLetter Published(if any)<i className="fa-solid fa-upload"></i></label>
              <input type="file" name="newsletter" id="newsletter" accept="application/pdf" className="ls-file" />

              <label for="Top-5-Case" className="ls-file-label">Certifications(if any)<i className="fa-solid fa-upload"></i></label>
              <input type="file" name="cert" id="cert" accept="application/pdf" className="ls-file" />

              <label for="Top-5-Case" className="ls-file-label">Testimonials(if any)<i className="fa-solid fa-upload"></i></label>
              <input type="file" name="test" id="test" accept="application/pdf" className="ls-file" />

              <label for="Top-5-Case" className="ls-file-label">Client Reviews(if any)<i className="fa-solid fa-upload"></i></label>
              <input type="file" name="client" id="client" accept="application/pdf" className="ls-file" />

              <label for="Top-5-Case" className="ls-file-label">Upload Your Image<i className="ls-fa-solid fa-upload"></i></label>
              <input type="file" name="image" id="image" accept="application/pdf" className="ls-file" />

              <div className="ls-btns-group">
                <a href="#" onClick={pre} className="ls-btn btn-prev">Previous</a>
                <a href="#" className="ls-btn btn-next">Sumbit+</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
