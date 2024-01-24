import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Filter from "./Filter";


function AllCategories(){
  const container = useRef();
  const tl = useRef();
  
  useGSAP(() => {
    tl.current = gsap.from(".effBTN",{opacity: 0, duration: 2, delay: 1, stagger: 0.6, x: 100});
}, { scope: container });

    return (
        <div ref={container} className="categoryNames">
            {['All Items', 'Breakfast', 'Lunch/Dinner', 'Soups', 'Appetizers','Beverage']
            .map(category => <Filter key={category}  category={category}/>)}
        </div>
    )
}
export default AllCategories;