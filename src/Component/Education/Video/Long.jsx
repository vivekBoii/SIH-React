import React from 'react';
import "./Long.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Long = () => {

    // video 
    const initSlidervideo = () => {
        const imageList = document.querySelector(".slider-wrapper .video-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button-video");

        // Slide images according to the slide button clicks
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide-video" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });

        // Call these two functions when image list scrolls
        imageList.addEventListener("scroll", () => {
            updateScrollThumbPosition();
        });
    }

    window.addEventListener("resize", initSlidervideo);
    window.addEventListener("load", initSlidervideo);
    return (
        <>
            <h1>Explainatory Videos</h1>
            <div className="video-sumpreme-container">
                <div className="video-slider-container">
                    <div className="slider-wrapper">
                        <button id="prev-slide-video" className="slide-button-video">
                            <ArrowBackIcon />
                        </button>
                        <ul className="video-list">
                            <div className="video-item">
                                <video className='longvideo' width="480px" height="630" controls>
                                    <source src="/long.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="video-item">
                                <video className='longvideo' width="480px" height="630" controls>
                                    <source src="/long.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="video-item">
                                <video className='longvideo' width="480px" height="630" controls>
                                    <source src="/long.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </ul>
                        <button id="next-slide-video" className="slide-button-video">
                            <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
