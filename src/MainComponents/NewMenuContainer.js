import { useState, useRef } from "react";
import './../App.css';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { NewMenuContainerData } from "../data/dataNewMenuContainer";
import React from 'react';
import {Link} from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)



const NewMenuContainer = () => {
    const AllCards = NewMenuContainerData;
    const slideLength = NewMenuContainerData.length;
  
    const [card, setCard] = useState(0);
    const container = useRef();
    const tl = useRef();
 
  
    const nextSlide = () => {
      setCard(card === slideLength - 3 ? 0 : card + 1);
    };
  
    const prevSlide = () => {
      setCard(card === 0 ? slideLength - 3 : card - 1);
    };
  
    const isMobile = window.innerWidth < 900; 
    useGSAP(() => {
      tl.current = gsap.from(".newMenuContainerText",{opacity: 0, duration: 3, delay: 1, scrollTrigger: {
          trigger: ".newMenuContainerText"
      }});
  }, { scope: container });
  
    return (

    <div ref={container} className={`newMenuContainer${isMobile ? 'mobileVers' : ''}`}>
        <div className="container">
        <h1 className="newMenuContainerText">New this week:</h1>
        </div>
        <div className="photoWArrowsBox">
        <AiOutlineArrowLeft className="menuArrowTwo prev" onClick={prevSlide} />
        {isMobile ? (
          <div className="newMenuBox">
            <div className="newMenuMiniBox">

              <img className="newMenuPhoto" src={AllCards[card].promo} alt='menuitem' />
  
              <div className="itemNameBox">
              <h3 className="dishName"> {AllCards[card].promoName} </h3>
              </div>
            </div>
          </div>
        ) : (
          AllCards.slice(card, card + 3).map((card) => (
            <div className="newMenuBox" key={card.index}>
              <div className="newMenuMiniBox">
                <img className="newMenuPhoto" src={card.promo} alt='newmenuitem' />
                <div className="itemNameBox">
                <h3 className="dishName"> {card.promoName} </h3>
                </div>
              </div>
            </div>
          ))
        )
        }

        <AiOutlineArrowRight className="menuArrowTwo next" onClick={nextSlide} />
        </div>
         <div className="container">
     <div className="newMenuContainerText"><h3>Find out <Link className="moreLink" to="/menu">more</Link></h3></div>
    </div>
      </div>
    )

}



export default NewMenuContainer;