import { useState, useEffect} from "react";
import Popup from "./PopUp";


function SignUp(){

    const[buttonPopup,setButtonPopup] = useState(false);
    const[timedPopup,setTimedPopup] = useState(false);


    useEffect(() =>{
        setTimeout(() => {
            setTimedPopup(true);
        },7000);
    },[]);


    return(
        <div>
<div>
        <button className="mainLinks buttonSignUp" onClick={() => setButtonPopup(true)}>Sign Up</button>
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