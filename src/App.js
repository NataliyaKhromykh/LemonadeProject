// import './App.css';
// import React from 'react';
//  import {
//  BrowserRouter as Router,
//   Routes,
//  Route,
//  Link
// } from "react-router-dom";
// import Menu from './MainComponents/Menu';
// import Home from './MainComponents/Home';
// import Contacts from './MainComponents/Contacts';
// import AboutUs from './MainComponents/AboutUs';
// import logo from './Assests/LemonadeLogo.jpg';
// import basket from './Assests/basket.png';
// import MyBasketPage from './MainComponents/MyBasketPage';
// import SignUp from './MainComponents/SignUp';
// import { RxHamburgerMenu } from "react-icons/rx";
//  import Sidebar from './MainComponents/Sidebar';


// function App() {
  
//   return <Router>
//     <nav>
//       <Link to="/"><img className='logoImg' src={logo} alt="logo"/></Link>
//       <Link to="/" className='mainLinks'>Home</Link>
//       <Link className='mainLinks' to="/menu">Menu</Link>
//       <Link className='mainLinks' to="/aboutUs">About Us</Link>
//       <Link to="/contacts" className='mainLinks'>Contacts</Link>
//       <Link><SignUp/></Link>
//       <div>
//       <RxHamburgerMenu className="hamIcon" />
//       </div>
//       <Link className='mainLinks' to="/basket"><img src={basket} width="30px" alt="basket"/></Link>
//     </nav>
//     <div>
//       <Sidebar/>
//     </div>

//     <Routes>
//     <Route path="/" element={<Home/>} />
//       <Route path="/menu" element={<Menu/>} />
//       <Route path="/aboutUs" element={<AboutUs/>} />
//       <Route path="/contacts" element={<Contacts/>} />
//       <Route path="/basket" element={<MyBasketPage/>} />
//     </Routes>
//     </Router>
// }

// export default App;


import Header from "./MainComponents/Header";
import './App.css';

function App() {
  return(
    <div>
      <Header/>
    </div>
  )
}
export default App;