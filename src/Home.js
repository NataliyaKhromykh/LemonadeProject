import './App.css';
import React from 'react';
import Carousel from './Carousel';
import NewMenuContainer from './NewMenuContainer';
import Feedback from './Feedback';
import Contacts from './Contacts';

function Home() {
    return(
        <div>
    <div className='flyersMainContainer'>
    <div className='flyersContainer'>
      <Carousel/>
    </div>
    </div>
    <div className='newMenuContainer'>
      <NewMenuContainer/>
    </div>
    <div>
      <Feedback/>
    </div>
    <div>
      <Contacts/>
    </div>
    </div>
    );
}
export default Home;