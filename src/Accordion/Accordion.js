import { AccordionItem } from "./AccordionItem";
import { list } from './../data/dataAccordion';

export const Accordion = () => {
    return (<div className="test">
        {list.map((item,index) =>
        <AccordionItem key = {index} title = {item.title} content = {item.content}/>)}
    </div>

    )
}