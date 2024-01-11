import React from "react";
import './../App.css';
import promo from "./../Assests/promo.JPG";

function Popup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
   <div className="detailsBarWrapper">
    <div className="divPromo">
    <img className="promoPhoto" src={promo} alt="promo"/>
    <div className="infoPromo">
        <h3 className="promoH3"> <span className="infoSpan">Sign up</span> to be <span className="infoSpan">the first one</span> <br></br> to know about our new menu changes,<br></br> special offers, giveaways and more!<br></br> You'll receive <span className="infoSpan"> a code for 25% off</span><br>
        </br> for your first order!</h3>
        </div>
    </div>
    <div className="contactWrapper">
    <div className="signingUpContainer">
        <div>
            <p className="inputName">Name</p>
            <input className="messageInput" type="text" placeholder="Nataliya Khromykh"></input>
        </div>
        <div>
            <p className="inputName">Email</p>
            <input className="messageInput" type="email"  placeholder="natashakhromykh@gmail.com"></input>
        </div>
        <div>
            <p className="inputName">Phone</p>
            <input className="messageInput" type="number" placeholder="+1(555) 666-77-88"></input>
        </div>

        <div>
        <button className="submitBtn">Sign Up</button>
        </div>
        
    </div>
<p className="promoP">* By signing up, you agree to receive email marketing</p>
    </div>
    </div>
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>X</button>
                { props.chilren }
            </div>
        </div>
    ): "";
}
export default Popup;