import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUpLanding.css";

export const SignUpLanding = () => {
    return (
        <>
            <div className="landing-container">
                <header className="landing-container-header">
                    <Link to="/">Legal Match</Link>
                </header>
                <main id="main">
                    <div className="landing-content">
                        <h1 >How do you want to use Website?</h1>
                        <p>We’ll personalize your setup experience accordingly.</p>
                        <div className="landing-content-option">
                            <ul>
                                <li>
                                    <Link to="/SignUpLawyer">
                                        <i className="fa-solid fa-scale-balanced"></i>
                                        <b>Sign Up as Lawyer</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/SignUpUser">
                                        <i className="fa-regular fa-user"></i>
                                        <b>Sign Up as User</b>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
