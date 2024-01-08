import { useState } from 'react';
import Footer from './Footer';
function AboutUs() {
    const description = `Hi! Our names are Ann and Susie. 
    We are twin sisters from a small town in Florida. 
    When we were kids we were making the best lemonade and crapes on Sundays to sell to our neighbours and bring it to church...After college we decided to open a small cafe. 
    There were just two items on our menu for a few years... 
    But our business grew... and now we serve breakfast, lunch and dinner! You can also place your order online and get fresh cooked meal within an hour!
    Our special gift for you - our delicious Old Fashion Lemonade for free with every order!`;

    const [showMore, setShowMore] = useState(false);

    return <div className="aboutUsContainer">
        <div className="videoAndStory">
                  <div className='card'>
          <video className='videoStory' src='aboutUs.mp4' autoplay="autoplay" loop="loop" muted defaultMuted playsinline/>
          </div>
          <div>
            <h1 className="WelcomeStoryh1">Welcome to our story!</h1>
            <p className="WelcomeStoryPar">{showMore ? description : description.substring(0,33)}<br></br><button className="showMore" onClick={() => setShowMore(!showMore)}> {showMore ? "Nah..I'll watch the video:)" : "Show the whole story"}</button></p>
          </div>
          </div>

        <div>
            <Footer/>
        </div>
          

    </div>
}
export default AboutUs;