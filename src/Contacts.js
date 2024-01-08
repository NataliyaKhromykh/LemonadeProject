import React from "react";
import facebook from "./Assests/facebookBlue.png";
import instagram from "./Assests/instagramBlue.png";
import whatsapp from "./Assests/whatsappBlue.png";
import phone from "./Assests/phoneBlue.png";
import address from "./Assests/addressBlue.png";
import map from "./Assests/map.png";
import { Accordion } from "./Accordion/Accordion";



function Contacts() {
    return (
        <div>

            <div className="contactsContainer">

                <h1 className="contactsH1">Our Address and Contacts:</h1>
                <div className="mapAndContacts">
            <img className="mapImg" src={map} alt="social"/>

            <div className="phoneAndAddress">
            <div className="contDetailsB">
            <img className="socialImgContB" src={phone} alt="social"/>
            <p className="contParB">+1(555)666-77-88</p>
            </div>

            <div className="contDetailsB">
            <img className="socialImgContB" src={address} alt="social"/>
            <p className="contParB">Orange Street, 17,<br></br>Orlando,FL,USA</p>
            </div>

            <div className="socialMediaB">
                <img className="mediaBlue" src={instagram} alt="social"/>
                <img className="mediaBlue" src={facebook} alt="social"/>
                <img className="mediaBlue" src={whatsapp} alt="social"/>
            </div>

            </div>
            </div>

            <h1 className="contactsH1">Information:</h1>
            <div className="accordionContainer">
            <Accordion/>
            </div>
            </div>

            <div className="footerContainer footerAddition">
            <p className="legalInform">Designed and Developed by <a className='toMyPage' target='_blank' rel="noreferrer" href="https://nataliyakhromykh-webdeveloper.glitch.me/">Nataliya Khromykh</a> ©️2024 All rights reserved<br></br>
The website was developed for educational purposes and is not a real offer.</p>
            </div>

        </div>
    );

}
export default Contacts;