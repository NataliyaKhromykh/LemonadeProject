import { useState } from 'react';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './../../../App.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../redux/cartSlice';


const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
        return (
            
        <div>

            <div className="product-card">
            <img src={`./Photo/${dish.img}.JPG`} width="200px" alt="dish"/>

            <div className='dishnameBox'>          
            <h3 className='dishName'>{dish.name}</h3>
            </div>
            <div className='priceBox'>
            <h3>${dish.price}</h3>
            </div>
            


            <div className='quantAddBox'>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className='addBtn' onClick={() => {dispatch(addItemToCart({dish, quantity}));
        }}>Add to cart</button>
        </div>
            </div>
  
        </div>

    )
}
export default Dish;