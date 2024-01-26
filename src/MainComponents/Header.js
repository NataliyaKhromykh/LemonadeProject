import './../App.css';
 import {
 BrowserRouter as Router,
  Routes,
 Route,
 Link
} from "react-router-dom";
import Home from './Home';
import Contacts from './Contacts';
import AboutUs from './AboutUs';
import logo from './../Assests/LemonadeLogo.jpg';
import basket from './../Assests/basket.png';
import MyBasketPage from './ReduxComponents/Cart/MyBasketPage';
import SignUp from './SignUp';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
import React, { useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { getTotalQuantity } from '../redux/cartSlice';
import gsap from 'gsap';
import Menu from './Menu';
import { useGSAP } from "@gsap/react";



function Header() {
  const container = useRef();
  const tl = useRef();

    const [sidebarOpen,setSidebarOpen] = useState(false);
    const totalQuantity = useSelector(getTotalQuantity);

    useGSAP(() => {
      tl.current = gsap.from(".effect",{opacity: 0, duration:3, delay: 2, stagger: 0.6, x: 100});
  }, { scope: container });

  return <Router>
    <nav ref={container}>
      <Link to="/"><img className='logoImg' src={logo} alt="logo"/></Link>
      <Link to="/" className='mainLinks forBlock effect'>Home</Link>
      <Link className='mainLinks forBlock effect' to="/menu">Menu</Link>
      <Link className='mainLinks forBlock effect' to="/aboutUs">About Us</Link>
      <Link to="/contacts" className='mainLinks forBlock effect'>Contacts</Link>
      <div className='mainLinks'>
      <SignUp/> 
      </div>


      <RxHamburgerMenu className="hamIcon mainLinks" onClick={() => setSidebarOpen(true)}/>
      <div>
    <Sidebar trigger={sidebarOpen} setTrigger={setSidebarOpen}>
    </Sidebar>
    </div>
      <Link className='mainLinks' to="/basket"><img className='basket' src={basket} alt="basket"/><span className='cartNumber'>{totalQuantity}</span></Link>
    </nav>


    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/basket" element={<MyBasketPage/>} />
    </Routes>
    </Router>
}

export default Header;