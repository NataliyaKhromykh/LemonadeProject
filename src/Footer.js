import instagram from "./Assests/instagram.png";
import facebook from "./Assests/facebook.png";
import whatsapp from "./Assests/whatsapp.png";
import phone from  "./Assests/telephone.png";
import address from "./Assests/address.png";


function Footer(){
return(
    <div className="footerContainer">

        <div className="socialMedia">
            <img className="socialImg" src={instagram} alt="social"/>
            <img className="socialImg" src={facebook} alt="social"/>
            <img className="socialImg" src={whatsapp} alt="social"/>
        </div>

        <div>
<div>
        <div className="contDetails">
            <img className="socialImgCont" src={phone} alt="social"/>
            <p className="contPar">+1(555)666-77-88</p>
        </div>

        <div className="contDetails">
            <img className="socialImgCont" src={address} alt="social"/>
            <p className="contPar">Orange Street, 17,<br></br>Orlando,FL,USA</p>
        </div>
</div>

        <div>
            <p className="legalInform">Designed and Developed by <a className='toMyPage' target='_blank' rel="noreferrer" href="https://nataliyakhromykh-webdeveloper.glitch.me/">Nataliya Khromykh</a> ©️2024 All rights reserved<br></br>
The website was developed for educational purposes and is not a real offer.</p>
        </div>

        </div>

        <div>
            <h2>Information</h2>
            <p className="contPar">Privacy Policy</p>
            <p className="contPar">Refund Policy</p>
            <p className="contPar">Delivery Police</p>
            <p className="contPar">Terms & Conditions</p>
        </div>

    </div>

)
}
export default Footer;
