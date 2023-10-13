import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores praesentium in odio provident architecto maiores fugit natus, sunt reiciendis officia similique nesciunt dolorem!</p>
                            <div className="social">
                                <Link href="https://facebook.com/"><span className="fab fa-facebook-f"></span></Link>
                                <Link href="#"><span className="fab fa-twitter"></span></Link>
                                <Link href="https://instagram.com/"><span className="fab fa-instagram"></span></Link>
                                <Link href="https://youtube.com/"><span className="fab fa-youtube"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="center box">
                        <h2>Services</h2>
                        <div className="content">
                            <div className="footer-services">
                                <Link href="" className="text">Lawyer</Link>
                                <Link href="" className="text">Online consultation</Link>
                                <Link href="" className="text">Document Writers</Link>
                                <Link href="" className="text">Property</Link>
                                <Link href="" className="text">Certificates</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="content">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input type="email" required/>
                                </div>
                                <div className="msg">
                                    <div className="text">Message *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                <div className="btn">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <center>
                        <span className="credit">Created By <Link href="https://www.codingnepalweb.com">Legal Match</Link> | </span>
                        <span className="far fa-copyright"></span><span> 2023 All rights reserved.</span>
                    </center>
                </div>
            </footer>
        </>
    )
}
