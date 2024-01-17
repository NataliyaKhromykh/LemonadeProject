import React, { useState, useEffect } from "react";
import gsap from 'gsap';


function FilterButtons({ data, setFood }) {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);


      useEffect(() => {
        if (isMounted) {
            gsap.from('.fbone', {opacity: 0, duration: 1, delay: 0.5 });
            gsap.from('.fbtwo', {opacity: 0, duration: 1, delay: 0.75 });
            gsap.from('.fbthree', {opacity: 0, duration: 1, delay: 1 });
            gsap.from('.fbfour', {opacity: 0, duration: 1, delay: 1.25 });
            gsap.from('.fbfive', {opacity: 0, duration: 1, delay: 1.5 });
            gsap.from('.fbsix', {opacity: 0, duration: 1, delay: 1.75 });
            gsap.from('.fbseven', {opacity: 0, duration: 1, delay: 2 });
          };
        }, [isMounted]);

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
            <button className="filterButton fbone" onClick={() => setFood(data)}>All Items</button>
            <button className="filterButton fbtwo" onClick={() => filteredFood("vegan")}>Only Vegan</button>
            <button className="filterButton fbthree" onClick={() => filteredFood("breakfast")}>Breakfast</button>
            <button className="filterButton fbfour" onClick={() => filteredFood("lunchDinner")}>Lunch/Dinner</button>
            <button className="filterButton fbfive" onClick={() => filteredFood("soups")}>Soups</button>
            <button className="filterButton fbsix" onClick={() => filteredFood("appetizers")}>Appetizers</button>
            <button className="filterButton fbseven" onClick={() => filteredFood("beverage")}>Beverages</button>
        </div>
    )
}
export default FilterButtons;