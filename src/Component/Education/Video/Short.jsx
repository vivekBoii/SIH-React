import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import shortsImg from "../../Images/photo_shorts.png";
import shortsVideo from "../../Images/short_1.mp4";
import "./Short.css"

export const Short = () => {

    // shorts 
    const initSlidershort = () => {
        const imageList = document.querySelector(".short-list");
        const slideButtons = document.querySelectorAll(".slide-button-short");

        // Slide images according to the slide button clicks
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide-short" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
    }

    window.addEventListener("resize", initSlidershort);
    window.addEventListener("load", initSlidershort);

    return (
        <>
            <h1>Shorts Video</h1>
            <div className="shots-container">
                <div className="shorts-img">
                    <img src={shortsImg} alt="" />
                </div>
                <div className="shorts-sumpreme-container">
                    <div className="short-slider-container">
                        <div className="slider-wrapper">
                            <button id="prev-slide-short" className="slide-button-short">
                                <ArrowBackIcon />
                            </button>
                            <ul className="short-list">
                                <div className="short-item">
                                    <video className='short-video' width="450" height="768" controls>
                                        <source src={shortsVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="short-item">
                                    <video className='short-video' width="450" height="768" controls>
                                        <source src={shortsVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="short-item">
                                    <video className='short-video' width="450" height="768" controls>
                                        <source src={shortsVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </ul>
                            <button id="next-slide-short" className="slide-button-short">
                                <ArrowForwardIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

  
