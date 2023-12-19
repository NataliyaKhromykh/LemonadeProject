function FilterButtons({ data, setFood }) {

    const filteredFood = searchTerm => {
        const filteredResult = [];
        data.forEach(item => {
            item.searchTerm.forEach(element => {
                if (element=== searchTerm) {
                    filteredResult.push(item);
                    setFood(filteredResult);
                }
            })
        })
    }

    return(
        <div className="filterBox">
            <button className="filterButton" onClick={() => setFood(data)}>All Items</button>
            <button className="filterButton" onClick={() => filteredFood("vegan")}>Only Vegan</button>
            <button className="filterButton" onClick={() => filteredFood("breakfast")}>Breakfast</button>
            <button className="filterButton" onClick={() => filteredFood("lunchDinner")}>Lunch/Dinner</button>
            <button className="filterButton" onClick={() => filteredFood("appetizers")}>Appetizers</button>
            <button className="filterButton" onClick={() => filteredFood("beverage")}>Beverages</button>
        </div>
    )
}
export default FilterButtons;