import { useState } from 'react';
import { data } from '../data/data';
import Food from './Food';
import FilterButtons from './FilterButtons';
import Footer from './Footer';

function Menu() {

    const [food, setFood] = useState(data);
  

    return(
        <div>
            <section id='products_section'>
                <div>
                <FilterButtons 
                data={data}
                setFood={setFood}/>
                </div>
        <div>
            <Food itemsForSale={food}/>
        </div>
        </section>
        <div>
            <Footer/>
        </div>
        </div>
    )
    }

export default Menu;