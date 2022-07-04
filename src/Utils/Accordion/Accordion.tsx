import React, {useRef, useState} from "react";
import {useSpring, animated} from "react-spring";
import classes from "./Accordion.module.scss";
import {AccordionData} from "./AccordionData";
import AccordionItem from "./AccordionItems";

type AccordionProps = {
    items: Array<AccordionData>
}
const Accordion = ({items}: AccordionProps) => {

    const [currentId, setCurrentId] = useState(-1)

    const btnClick = (id: number) => {
        setCurrentId(id)
    }

    return (<ul className={classes.list__style}>

        {items.map((item, index) =>
            (<AccordionItem
                    key={index}
                    data={item}
                    isOpen={currentId == index}
                    btnonClick={() => btnClick(index)}/ >))}

                </ul>)

        }

export default Accordion