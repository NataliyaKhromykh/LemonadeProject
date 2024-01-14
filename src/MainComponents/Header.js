import './../App.css';
 import {
 BrowserRouter as Router,
  Routes,
 Route,
 Link
} from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Contacts from './Contacts';
import AboutUs from './AboutUs';
import logo from './../Assests/LemonadeLogo.jpg';
import basket from './../Assests/basket.png';
import MyBasketPage from './MyBasketPage';
import SignUp from './SignUp';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
import React, { useState } from "react";


function Header() {

    const [sidebarOpen,setSidebarOpen] = useState(false);

  
  return <Router>
    <nav>
      <Link to="/"><img className='logoImg' src={logo} alt="logo"/></Link>
      <Link to="/" className='mainLinks forBlock'>Home</Link>
      <Link className='mainLinks forBlock' to="/menu">Menu</Link>
      <Link className='mainLinks forBlock' to="/aboutUs">About Us</Link>
      <Link to="/contacts" className='mainLinks forBlock'>Contacts</Link>
      <Link><SignUp/></Link>
      <RxHamburgerMenu className="hamIcon" onClick={() => setSidebarOpen(true)}/>
      <div>
    <Sidebar trigger={sidebarOpen} setTrigger={setSidebarOpen}>
    </Sidebar>
    </div>
      <Link className='mainLinks' to="/basket"><img className='basket' src={basket} alt="basket"/></Link>
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