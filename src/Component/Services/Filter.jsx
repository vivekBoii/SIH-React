import React, { useState, useEffect, useCallback } from 'react';
import "./Filter.css";
import { FilterCard } from './FilterCard';
import Layer from "../Images/user.jpg";
import menu from "../Images/menu.png"

export const Filter = () => {

    const [pre, post] = useState(true);

    const [windowWidth, setWindowWidth] = useState(1600);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
        if(window.innerWidth>1275){
            post(true);
        }
    }, [])

    return (
        <>
            <div className="filter-search-lawyer-container">
                <div className="filter-search-container">
                    <form action="" autocomplete="off">
                        <div className='filterMenu'>
                            <h2>Filters</h2>
                            <div onClick={()=>{post(!pre)}} >
                                <img src={menu} alt="img" />
                            </div>
                        </div>
                        <div style={{ display: `${ pre ? "block" : "none"}` }}>
                            <label for="city">City</label>
                            <select id="city" name="filter-city">
                                <option value="select-city">City</option>
                                <option value="meerut">Meerut</option>
                                <option value="delhi">Delhi</option>
                                <option value="ghazibad">Ghazibad</option>
                                <option value="lucknow">Lucknow</option>
                                <option value="agra">Agra</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="chennai">chennai</option>
                            </select>

                            <label for="type-lawyer">Types of Lawyer</label>
                            <select id="type-lawyer" name="filter-type-lawyer">
                                <option value="select-type">Type</option>
                                <option value="family">Family</option>
                                <option value="Law">Law</option>
                                <option value="Immigration">Immigration</option>
                                <option value="Criminal">Criminal</option>
                                <option value="Environmental">Environmental</option>
                                <option value="constitution">Constitution</option>
                            </select>

                            <label for="exp">Experience</label>
                            <select id="exp" name="filter-exp">
                                <option value="select-exp">Selct Experience</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="5+">5+</option>
                                <option value="7+">7+</option>
                                <option value="8+">8+</option>
                                <option value="10+">10+</option>
                            </select>

                            <label for="language">Language</label>
                            <select id="language" name="filter-language">
                                <option value="select-lang">Select Language</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Urdu">Urdu</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="haryanvi">Haryanvi</option>
                                <option value="Gujrati">Gujrati</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Telgu">Telgu</option>
                            </select>

                            <label for="gender">Gender</label>
                            <select id="gender" name="filter-gender">
                                <option value="select-Gender">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>

                            <label for="rating">Rating</label>
                            <select id="rating" name="filter-rating">
                                <option value="select-rating">Select Rating</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                            </select>

                            <div className="filter-btn-grp">
                                <button className="filter-button" type="submit">Filter<i className="filter-fa-solid fa-arrow-right"></i></button>
                                <button className="filter-button" type="reset">Reset<i className="filter-fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="filter-lawyer-container">
                    <h1>Consult Best Lawyers / Advocates in India</h1>
                    <FilterCard src={Layer} name={"Advocate Jaspreet Singh Rai"} year={"10"} location={"Delhi"} degree={"LLB"} urating={"5"} client={"10"} area={"Marriage , Robbery , dhoka"} />
                    <FilterCard src={Layer} name={"Advocate Jaspreet Singh Rai"} year={"10"} location={"Delhi"} degree={"LLB"} urating={"5"} client={"10"} area={"Marriage , Robbery , dhoka"} />
                    <FilterCard src={Layer} name={"Advocate Jaspreet Singh Rai"} year={"10"} location={"Delhi"} degree={"LLB"} urating={"5"} client={"10"} area={"Marriage , Robbery , dhoka"} />
                    <FilterCard src={Layer} name={"Advocate Jaspreet Singh Rai"} year={"10"} location={"Delhi"} degree={"LLB"} urating={"5"} client={"10"} area={"Marriage , Robbery , dhoka"} />
                    <FilterCard src={Layer} name={"Advocate Jaspreet Singh Rai"} year={"10"} location={"Delhi"} degree={"LLB"} urating={"5"} client={"10"} area={"Marriage , Robbery , dhoka"} />
                </div>
            </div>
        </>
    )
}
