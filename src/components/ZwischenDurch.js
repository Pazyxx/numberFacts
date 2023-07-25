import React from "react";
import OutPutSection from "./OutPutSection";

const ZwischenDurch = ({onMouseEnter, searchBoxEnter, enteredNumber ,enteredQuote}) =>{
    if (enteredNumber.length >= 1 && enteredQuote.length >= 1){
        return(
            <OutPutSection onMouseEnter={onMouseEnter} searchBoxEnter={searchBoxEnter} enteredQuote={enteredQuote}/>
        )
    }

    
}

export default ZwischenDurch