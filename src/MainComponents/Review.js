import React, { useState, useRef } from "react";
import feedback from "../data/dataFeedback";
import { GiCutLemon } from "react-icons/gi";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)



function Review(){
    const [index,setIndex] = useState(0);
    const {name,image,fav,text} = feedback[index];
    const container = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.from(".effRight",{opacity: 0, duration:2, delay: 1, x: 100, scrollTrigger: {
            trigger: ".effRight"
        }});
        tl.current = gsap.from(".effLeft",{opacity: 0, duration:2, delay: 1, x: -100, scrollTrigger: {
            trigger: ".effLeft"
        }});
        tl.current = gsap.from(".quote-icon",{opacity: 0, duration:2, delay: 2, scrollTrigger: {
            trigger: ".quote-icon"
        }});
    }, { scope: container });



const checkNumber = (number) => {
    if(number > feedback.length -1){
        return 0;
    }
    if(number < 0) {
        return feedback.length -1;
    }
    return number;
}
    const nextPerson = () =>{
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () =>{
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return <div ref={container} className="containerWArrows">
        <AiOutlineArrowLeft className="reviewArrow prevArrow effLeft" onClick={prevPerson}/>
        <article className="feedbackBox">
        <div className="img-container"> 
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
            <GiCutLemon/>
        </span>
        </div>
        <div className="text-container">  
        <h4 className='author'>{name}</h4>
        <p className='fav'>My favourite on the menu is {fav}</p>
        <p className='infoText'>{text}</p>
        </div>
    </article>
    <AiOutlineArrowRight className="reviewArrow nextArrow effRight" onClick={nextPerson}/>
    </div>;
};

export default Review;