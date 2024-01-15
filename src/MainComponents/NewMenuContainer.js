import { useState, useEffect } from "react";
import './../App.css';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { NewMenuContainerData } from "../data/dataNewMenuContainer";
import React from 'react';
import {Link} from "react-router-dom";



const NewMenuContainer = () => {
    const AllCards = NewMenuContainerData;
    const slideLength = NewMenuContainerData.length;
  
    const [card, setCard] = useState(0);
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 7000;
  
    const nextSlide = () => {
      setCard(card === slideLength - 3 ? 0 : card + 1);
    };
  
    const prevSlide = () => {
      setCard(card === 0 ? slideLength - 3 : card - 1);
    };
  
    const isMobile = window.innerWidth < 900; 
  
    // function auto() {
    //     slideInterval = setInterval(nextSlide, intervalTime);
    //   }
      
    useEffect(() => {
      if (autoScroll) {
        // auto();

        slideInterval = setInterval(nextSlide, intervalTime);

      }
      return () => clearInterval(slideInterval);
    }, [autoScroll, slideInterval, card]);
  
    return (

    <div className={`newMenuContainer${isMobile ? 'mobileVers' : ''}`}>
        <div className="container">
        <h1 className="newMenuContainerText">New this week:</h1>
        </div>
        <div className="photoWArrowsBox">
        <AiOutlineArrowLeft className="menuArrowTwo prev" onClick={prevSlide} />
        {isMobile ? (
          <div className="newMenuBox">
            <div className="newMenuMiniBox">
              <img className="newMenuPhoto" src={AllCards[card].promo} alt='menuitem' />
              <p className="itemName"> {AllCards[card].promoName} </p>
            </div>
          </div>
        ) : (
          AllCards.slice(card, card + 3).map((card) => (
            <div className="newMenuBox" key={card.index}>
              <div className="newMenuMiniBox">
                <img className="newMenuPhoto" src={card.promo} alt='newmenuitem' />
                <p className="itemName"> {card.promoName} </p>
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