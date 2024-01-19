import React, { useState, useEffect } from "react";
import gsap from 'gsap';

import Filter from "./Filter";
function AllCategories(){

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);


      useEffect(() => {
        if (isMounted) {
            gsap.from('.categoryNames', {opacity: 0, duration: 2, delay: 1 });
          };
        }, [isMounted]);
    return (
        <div className="categoryNames">
            {["All Items","Only Vegan","Breakfast", "Lunch/Dinner", "Soups", "Appetizers","Beverages"]
            .map(category => <Filter key={category}  category={category}/>)}
        </div>
    )
}
export default AllCategories;