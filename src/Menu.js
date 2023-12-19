import { useState } from 'react';
import { data } from './data';
import Food from './Food';
import FilterButtons from './FilterButtons';

function Menu() {

    const [food, setFood] = useState(data);

    //  const chosenFood = (searchTerm) =>{
    //     const newFood = data.filter(element => element.searchTerm === searchTerm);
    //     setFood(newFood);
    // }
  
  



    return(
        <div>
            <div>
                <FilterButtons 
                data={data}
                setFood={setFood}/>
            </div>
        <div>
            <Food itemsForSale={food}/>
        </div>
        </div>
    )
    }

export default Menu;