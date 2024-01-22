import { dataDishes } from "../../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../../redux/dishesSlice";
import Footer from '../../../MainComponents/Footer';

const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
    <div className="dishesContainer">
        
    {dataDishes
    .filter(dish => {
        if (selectedCategory === 'All Items') return true;
        return selectedCategory === dish.category;
    }
    )
    .map(dish => <Dish key={dish.id} dish={dish}/>)}
    </div>
    <div>
        <Footer/>
    </div>
    </div>
)
}
export default Dishes;