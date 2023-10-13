import React from 'react'
import "./Card.css"

export const Card = ({ Img, Etext, Htext }) => {
    return (
        <>
            <div className='full'>
                <div className="card">
                    <a href="">
                        <img src={Img} alt="Services" />
                        <div className="text">
                            <p>{Etext}</p>
                            <p>{Htext}</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
