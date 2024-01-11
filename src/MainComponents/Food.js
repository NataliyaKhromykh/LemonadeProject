function Food({itemsForSale}) {
    return(<div className="itemsBox">
        {itemsForSale.map((element => {
        const {id,name,price,image} = element;
        return( 
        <div className="product-card" key={id}>
        <img src={image} width="200px" alt="item"/>
        <div className="nameAndPrice">
        <div>
        <h3>{name}</h3>
        </div>
        <div>
        <h4>{price} $</h4>
        </div>
        </div>
    </div>)
        }))}
    </div>)
}
export default Food;
