import React from 'react';
import "./ServicesSlider.css";
import { ServicesSlidercard } from './ServicesSlidercard';
import blog from "../Images/blogs.png";
import shorts from "../Images/shorts.png";
import verdict from "../Images/verdict.png";
import consult from "../Images/consult.png";
import newsletter from "../Images/newsletter.png";
import track from "../Images/track_your_case.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const ServicesSlider = () => {

    const initSlider = () => {
        const imageList = document.querySelector(".slider-wrapper .image-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
        const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
    
            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
    
                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
    
                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }
    
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }
    
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });

        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
    
        const handleSlideButtons = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "flex" : "flex";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "flex" : "flex";
        }
    
        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }
    
        imageList.addEventListener("scroll", () => {
            updateScrollThumbPosition();
            handleSlideButtons();
        });
    }
    
    window.addEventListener("resize", initSlider);
    window.addEventListener("load", initSlider);

    return (
        <>
            <h1>Education</h1>
            <div className="supreme-contain">
                <div className="container">
                    <div className="slider-wrapper">
                        <button id="prev-slide" className="slide-button">
                            <ArrowBackIcon/>
                        </button>
                        <ul className="image-list">
                            <ServicesSlidercard path={"/education/blog"}  img={blog} text={"Blogs"}/>
                            <ServicesSlidercard path={"/education/video"} img={shorts} text={"Short Video"}/>
                            <ServicesSlidercard path={"/education/verdict"} img={verdict} text={"Vertict Flow"}/>
                            <ServicesSlidercard path={"/education/consult"} img={consult} text={"Consulting"}/>
                            <ServicesSlidercard path={"/education/news"} img={newsletter} text={"Newsletter"}/>
                            <ServicesSlidercard path={"/education/track"} img={track} text={"Track Your Case"}/>
                        </ul>
                        <button id="next-slide" className="slide-button">
                            <ArrowForwardIcon/>
                        </button>
                    </div>
                    <div className="slider-scrollbar">
                        <div className="scrollbar-track">
                            <div className="scrollbar-thumb"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
