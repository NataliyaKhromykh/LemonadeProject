import './../App.css';
import {Link} from "react-router-dom";


function Sidebar(props) {
    return (props.trigger) ? (
        <div className='sidebar'>
            <div className='closeSidebarContainer'>
            <button className='closeSidebar' onClick={() => props.setTrigger(false)}>X</button>
            </div>
            <div className='sidebarLinks'>
            <Link className="sidebarLink" to="/">Home</Link>
            <Link className="sidebarLink" to="/menu">Menu</Link>
            <Link className="sidebarLink" to="/aboutUs">About Us</Link>
            <Link className="sidebarLink" to="/contacts">Contacts</Link>
            </div>
        </div>
    ):"";
}
export default Sidebar;
