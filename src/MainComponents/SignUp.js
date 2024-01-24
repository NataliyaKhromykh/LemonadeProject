import { useState, useEffect, useRef} from "react";
import Popup from "./PopUp";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


function SignUp(){

    const container = useRef();
    const tl = useRef();

    const[buttonPopup,setButtonPopup] = useState(false);
    const[timedPopup,setTimedPopup] = useState(false);

    useGSAP(() => {
        tl.current = gsap.from(".effect",{opacity: 0, duration:3, delay: 2, stagger: 0.6, x: 100});
    }, { scope: container });


    useEffect(() =>{
        setTimeout(() => {
            setTimedPopup(true);
        },7000);
    },[]);


    return(
        <div>
    <div>
        <button className="mainLinks buttonSignUp effect" onClick={() => setButtonPopup(true)}>Sign Up</button>
    </div>
    <div>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    </Popup>
    </div>
    <div>
    <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
    </Popup>
    </div>
    </div>
    )
}
export default SignUp;