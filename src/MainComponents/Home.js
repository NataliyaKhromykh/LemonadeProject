import './../App.css';
import React from 'react';
import Carousel from './Carousel';
import NewMenuContainer from './NewMenuContainer';
import Feedback from './Feedback';
import Footer from './Footer';
// import Popup from "./PopUp";

function Home() {
    return(
        <div>
    <div className='flyersMainContainer'>
    <div className='flyersContainer'>
      <Carousel/>
    </div>
    {/* <div>
    <Popup trigger={false}>
            <h3>My pop up</h3>
    </Popup>
    </div> */}
    </div>
    <div className='newMenuContainer'>
      <NewMenuContainer/>
    </div>
    <div>
      <Feedback/>
    </div>

    <Footer/>
    </div>
    );
}
export default Home;