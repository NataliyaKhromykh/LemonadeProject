import React from "react";
import {useEffect, useState} from "react";
import Up from './../Assests/Up2.png';


function BackToTop() {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setBackToTopBtn(true)
            } else {
                setBackToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        })
    }

    return(
        <div>
            {backToTopBtn && (
                <button className="backToTopBtn"
                onClick={scrollUp}><img className="upImg" src={Up} alt="upBtn"/></button>
            )}
        </div>
    )
}

export default BackToTop;

