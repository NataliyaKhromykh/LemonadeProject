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
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { getTotalQuantity } from '../redux/cartSlice';
import gsap from 'gsap';
import Menu from '../Menu';


function Header() {

    const [sidebarOpen,setSidebarOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const totalQuantity = useSelector(getTotalQuantity);

    useEffect(() => {
      setIsMounted(true);
    }, []);


      useEffect(() => {
        if (isMounted) {
            gsap.from('.mainLinks', {opacity: 0, duration: 2, delay: 1 });
          };
        }, [isMounted]);

  
  return <Router>
    <nav>
      <Link to="/"><img className='logoImg' src={logo} alt="logo"/></Link>
      <Link to="/" className='mainLinks forBlock'>Home</Link>
      <Link className='mainLinks forBlock' to="/menu">Menu</Link>
      <Link className='mainLinks forBlock' to="/aboutUs">About Us</Link>
      <Link to="/contacts" className='mainLinks forBlock'>Contacts</Link>
      <Link><SignUp/></Link>
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