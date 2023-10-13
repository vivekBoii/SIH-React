import React from 'react';
import "./Accordian.css"
import { useState } from 'react';

export const Accordian = () => {

    const[preAcc,NowAcc]=useState(false);

    let question = [
        {
            question: "How Do I file for divorce?",
            answer: "Hello , you and your husband have to file a petition of divorce on mutual consent together alongwith affidavits . both of your statement s will be recorded in the court . then after 6 months a second petition will be filed and then simillary both of your statements will be recorded again n then ur divorce will be final ."
        },
        {
            question: "Married a girl but I have no proof can I stop her from second marriage",
            answer: "You should get the marriage registered as soon as possible, to prevent such an incident from happening. A marriage certificate should be sufficient proof of the marriage, whereas audio recording and all can be questioned."
        },
        {
            question: "Hi Sir, I got married in July lasy year. Can I seek divorce? Please help me.",
            answer: "You can seek divorce before one year of marriage. Please try to reconcile the differences with your spouse. Every marriage has teething problems, and you should try to make it work . regards hope this helps"
        },
        {
            question: "Can Advocate Jaspreet Singh Rai represent me in court?",
            answer: "Yes, Advocate Jaspreet Singh Rai can represent you in court. The lawyer is trained to present your case in the most effective way possible"
        },
        {
            question: "What should I bring to my initial consultation with Advocate Jaspreet Singh Rai?",
            answer: "When you meet with Advocate Jaspreet Singh Rai for an initial consultation, it is important to bring any relevant documents or information with you. This may include documents related to your legal issue, such as contracts or court orders, as well as any other relevant information, such as a list of questions or concerns you have about your case."
        }
    ]
    const AccordianOn =(event)=>{
        NowAcc(!preAcc);
        const element=event.target.nextSibling;
        preAcc ? element.style.maxHeight = "none" : element.style.maxHeight = "0" ;
    }

    return (
        <>
            <div className="faq">
                <h1>FAQ'S</h1>
                <div className="accordion">
                    {
                        question.map((question,index) => {
                            return (
                                <div key={`acc-${index}`} className="accordion-item">
                                    <div onClick={AccordianOn} className="accordion-item-header" >{question.question}</div>
                                    <div className="accordion-item-body">
                                        <div className="accordion-item-body-content">
                                            {question.answer}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
