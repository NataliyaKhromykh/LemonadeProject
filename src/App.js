import './App.css';
import React from 'react';
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
import logo from './LemonadeLogo.jpg';
import basket from './basket.png';



function App() {

  return <Router>
    <nav>
      <Link to="/"><img src={logo} width="120px" alt="logo"/></Link>
      <Link to="/" className='mainLinks'>Home</Link>
      <Link className='mainLinks' to="/menu">Menu</Link>
      <Link className='mainLinks' to="/aboutUs">About Us</Link>
      <Link to="/contacts" className='mainLinks'>Contacts</Link>
      <Link className='mainLinks' to="/basket"><img src={basket} width="30px" alt="basket"/></Link>
    </nav>

    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
    </Router>
}

export default App;