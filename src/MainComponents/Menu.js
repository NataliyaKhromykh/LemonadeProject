import '../App.css';
import Dishes from './ReduxComponents/DishesComponents/Dishes';
import AllCategories from './ReduxComponents/Filter/AllCategories';


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