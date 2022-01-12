import React from "react";
import Clock from "react-digital-clock";

import { useState } from "react/cjs/react.development";

const ToDoList = () => {

  const[num,setNum] = useState(0);

  const incNum = () => {
      setNum(num + 1);
  }

  const decNum = () => {
      if(num > 0){
      setNum(num - 1);
      }else{
          alert("Limit reached to 0");
      }
  }

    return(
        <>
         <div className = "main_div">
             <div className = "center_div"><br/><br/><br/><br/><br/>
             <div className = "sub_div"><h1> {num} </h1></div>
             <div class = "button_div">
                <button className="button" onClick = {incNum}> Increment </button>
                <button className="button" onClick = {decNum}> Decrement </button>
             </div>
             </div>
         </div>
        </>
    );
};

/*const ToDoList = () => {
    return(
        <Clock />
    )
  
};*/

export default ToDoList;

