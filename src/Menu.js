import './App.css';
import Dishes from './MainComponents/ReduxComponents/DishesComponents/Dishes';
import AllCategories from './MainComponents/ReduxComponents/Filter/AllCategories';


function Menu() {
    return(
        <div>
            <div className='filterBox'>
            <AllCategories/>
            </div>
            <div >
            <Dishes/> 
            </div>
                 
        </div>
    )
}
export default Menu;