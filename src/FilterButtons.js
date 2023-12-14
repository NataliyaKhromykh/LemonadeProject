function FilterButtons({filteredFood}) {
    return(
        <div className="filterBox">
            <button className="filterButton">All Items</button>
            <button className="filterButton" onClick={() => filteredFood('vegan')}>Only Vegan</button>
            <button className="filterButton" onClick={() => filteredFood('breakfast' || 'breakfast vegan')}>Breakfast</button>
            <button className="filterButton" onClick={() => filteredFood('lunchDinner')}>Lunch/Dinner</button>
            <button className="filterButton" onClick={() => filteredFood('appetizers')}>Appetizers</button>
            <button className="filterButton" onClick={() => filteredFood('beverage')}>Beverages</button>
        </div>
    )
}
export default FilterButtons;