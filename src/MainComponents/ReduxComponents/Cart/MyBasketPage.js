import { useSelector } from "react-redux";
import { getTotalPrice, getCartItems } from "../../../redux/cartSlice";
import CartItem from './CartItem';
import Swal from "sweetalert2";



const MyBasketPage = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const alert = () =>{
        Swal.fire({
            icon: "error",
            title: "Oops...This is not a real offer!",
            text: "But if you like this website please visit the link below",
            footer: '<a target= "_blank" href="https://nataliyakhromykh-webdeveloper.glitch.me/">My Portfolio</a>'
          });
    }

    return (<div className="mybasketContainer">
        <h1 className="basketName">Your basket looks great!</h1>
        {cartItems.map(cartItem  => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
        <div>
            <h3 className="basketPrice">Total Price: $ {totalPrice}</h3>
        </div>
        <div>
            <button onClick={alert} className="paymentBtn">GO TO PAYMENT</button>
        </div>
    </div>)
}


export default MyBasketPage;