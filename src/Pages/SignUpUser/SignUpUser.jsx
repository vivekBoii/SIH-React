import React from 'react';
import "./SignUpUser.css";

export const SignUpUser = () => {
    return (
        <>
            <div className="User-container">
                <div className="User-authenticator">
                    <div className="User-logo">Legal Match</div>
                    <h2>Sign Up</h2>
                    <p>One click away from Legal Services</p>
                    <div className="User-login-container">
                        <div className="User-header">
                            <button className="User-a-active">User</button>
                        </div>
                        <div className="User-form-page">
                            <form className="User-login-content" autocomplete="off">
                                <input className="user-form" type="text" Name="User-name" id="name" placeholder="Your Name" required />
                                <i className="User-fa-regular fa-user"></i>

                                <input className="user-form" type="tel" Name="User-phone" id="phone" placeholder="Your Mobile number " required />
                                <i className="User-fa-solid fa-phone"></i>

                                <input className="user-form" type="email" Name="User-email" id="email" placeholder="Your email" required />
                                <i className="User-fa-regular fa-envelope"></i>

                                <input className="user-form" type="password" Name="User-set-password" id="set-password" placeholder="Set Password" required />
                                <i className="User-fa-solid fa-lock"></i>

                                <input className="user-form" type="password" Name="User-confirm-password" id="confirm-password" placeholder="Confirm Password" required />
                                <i className="User-fa-solid fa-lock"></i>

                                <input className="user-form" type="text" Name="User-address" id="address" placeholder="Your City" required />
                                <i className="User-fa-regular fa-map"></i>
                            </form>
                            <button type="submit" className="User-btn">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
