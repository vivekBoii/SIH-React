import React from 'react';
import "./Login.css";



export const Login = () => {
    return (
        <>
            <div className="auth-container">
                <div className="authenticator">
                    <div className="auth-logo">Legal Match</div>
                    <h2>Login</h2>
                    <p>One click away from Legal Services</p>
                    <div className="login-container">
                        <div className="auth-header">
                            <button className="btn-left a-active">User</button>
                            <button className='btn-right'>Lawyer</button>
                        </div>
                        <div className="form-page-auth">
                            <form className="login-content" autocomplete="off">
                                <input type="text" name="username" id="username" placeholder="Your Mobile number or email" required />
                                <i className="fa-regular fa-user"></i>

                                <input type="password" name="password" id="password" placeholder="Your Password" required />
                                <i className="fa-solid fa-lock"></i>
                            </form>
                            <div className="forgot-remember">
                                <span className="check">
                                    <input type="checkbox" name="Remember" id="Remember" />
                                    <label for="Remember">Remember me</label>
                                </span>
                                <a href="#" >Forgot your Password?</a>
                            </div>
                            <button type="submit" className="btn-auth">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
