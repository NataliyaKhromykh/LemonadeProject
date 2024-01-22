import { dataDishes } from "../../../data/dataDishes";
import deleteIcon from '../../../Assests/delete.png'
import { removeItemFromCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";



const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();


    return(
        <div>
            <div className="basketItemContainer">
            <img className="imgInCart" src={`./Photo/${dishes.img}.JPG`} alt="dish"/>
                <div className="nameBox">
                <h3 className="dishName">{dishes.name}</h3>
            </div>
        <p className="indivPrice">x{cartItem.quantity}</p>
        <p className="indivPrice">Price: ${dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="deleteIcon" src={deleteIcon} alt="deleteIcon"/>
        </span>
        </div>


    </div>
    )

}
export default CartItem;