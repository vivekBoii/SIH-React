import React from 'react';
import "./ServSlider.css";
import { ServicesCard } from './ServicesCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export const ServSlider = () => {

    const imageList = document.querySelector(".serv-image-list");

    // Slide images according to the slide button clicks
    // slideButtons.forEach() => {
    //     button.addEventListener("click", () => {
    //         const direction = button.id === "prev-slide" ? -1 : 1;
    //         const scrollAmount = imageList.clientWidth * direction;
    //         imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    //     });
    // }

    const pre = ()=>{
        console.log("clicked")
        const scrollAmount = imageList.clientWidth * -1;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    const next = ()=>{
        const scrollAmount = imageList.clientWidth * 1;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    const array = [
        {
            link: "#",
            image: "/Images/family.png",
            name: "Family"
        },
        {
            link: "#",
            image: "/Images/civil-right.png",
            name: "Civil Rights"
        },
        {
            link: "#",
            image: "/Images/briefcase.png",
            name: "Croporate"
        },
        {
            link: "#",
            image: "/Images/handcuffs.png",
            name: "Criminal"
        },
        {
            link: "#",
            image: "/Images/passport.png",
            name: "Immigration"
        },
        {
            link: "#",
            image: "/Images/save-the-world.png",
            name: "Environmental"
        },
        {
            link: "#",
            image: "/Images/tax.png",
            name: "Tax"
        },
        {
            link: "#",
            image:"/Images/bankruptcy.png",
            name: "Bankruptcy"
        },
        {
            link: "#",
            image: "/Images/break-up.png",
            name: "Divorce"
        },
        {
            link: "#",
            image: "/Images/constitution.png",
            name: "Constitution"
        },
        {
            link: "#",
            image: "/Images/law.png",
            name: "Advocate"
        },
        {
            link: "#",
            image: "/Images/property.png",
            name: "Property"
        },
        {
            link: "#",
            image: "/Images/child-labour.png",
            name: "Child Labour"
        },
        {
            link: "#",
            image: "/Images/public-prosecutor.png",
            name: "Prosecutor"
        }
    ]
    return (
        <>
            <h1>Services - Types of Lawyers</h1>
            <div className="serv-supreme-contain">
                <div className="serv-container">
                    <div className="serv-slider-wrapper">
                        <button id="prev-slide" onClick={pre} className="serv-slide-button">
                            <ArrowBackIcon />
                        </button>
                        <ul className="serv-image-list">
                            {
                                array.map((props, index) => {
                                    console.log(props);
                                    return (
                                        <ServicesCard {...props} />
                                    )
                                })
                            }
                        </ul>
                        <button id="next-slide" onClick={next} className="serv-slide-button">
                            <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
