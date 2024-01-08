import React, {useState} from "react";
import feedback from "./data/dataFeedback";
import { GiCutLemon } from "react-icons/gi";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";


const Review = () => {
    const [index,setIndex] = useState(0);
    const {name,image,fav,text} = feedback[index];

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

    return <div className="containerWArrows">
        <AiOutlineArrowLeft className="reviewArrow prevArrow" onClick={prevPerson}/>
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
    <AiOutlineArrowRight className="reviewArrow nextArrow" onClick={nextPerson}/>
    </div>;
};

export default Review;