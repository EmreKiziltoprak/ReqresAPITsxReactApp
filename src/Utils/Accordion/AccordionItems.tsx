import React, {useEffect, useRef, useState } from "react";
import {AccordionData} from "./AccordionData";
import  "./AccordionItems.scss";

 const AccordionItem = ({data, isOpen, btnonClick}
                            : { data: AccordionData, isOpen: boolean, btnonClick: () => void}) => {

     const contentRef = useRef<HTMLDivElement>(null)
     const [height,setHeight] = useState(0)

     console.log(isOpen)
     useEffect(() => {
         if(isOpen){
             const currentElement = contentRef.current as HTMLDivElement

             setHeight(currentElement.scrollHeight)
         }
         else {
             setHeight(0)
         }
     }, [isOpen])
    return(
        <li className={`accordion_item ${isOpen ? 'active' : ''}`}>

            <div>
                <button className="accordion_item__btn" onClick={btnonClick}>
                    {data.title}
                </button>
            </div>
            <div className="accordion_item__container" style={{height}} >
                <div ref={contentRef} className="accordion_item__content">
                    {data.content}
                </div>
            </div>
        </li>
    )
}

export default AccordionItem