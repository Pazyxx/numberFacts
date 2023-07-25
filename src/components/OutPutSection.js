import React from "react";
import "./OutPutSection.css"


const OutPutSection = ({searchBoxEnter, enteredQuote}) =>{
    return(
        <div id={searchBoxEnter ? "clickd" : "unclicked"} className="outPutBox">
            <span>{enteredQuote}</span>
        </div>
    )
    
}

export default OutPutSection