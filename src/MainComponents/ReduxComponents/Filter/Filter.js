import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory,filterCategory } from "../../../redux/dishesSlice";



const Filter = ({category}) =>{

    const dispatch = useDispatch();


    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            <button onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected effBTN' : 'categorySelected effBTN'}>{category}</button>
        </div>
    )
}
export default Filter;