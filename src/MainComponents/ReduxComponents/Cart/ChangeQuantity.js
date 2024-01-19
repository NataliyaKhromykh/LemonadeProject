const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <=1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return(
        <div className="minusPlusBox">
            <button className="minusPlusBtn" onClick={removeQuantity}>-</button>
            <span className="quantityNumber">{quantity}</span>
            <button className="minusPlusBtn" onClick={addQuantity}>+</button>
        </div>
    )
}
export default ChangeQuantity;