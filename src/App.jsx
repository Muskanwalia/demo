import React, { createContext } from "react";
import CompA from "./CompA.jsx";
import ToDoList from './ToDoList.jsx';

const FirstName = createContext();

const App = () => {
  return(
  <>
 <ToDoList/>
    <FirstName.Provider value = {"Hello"}>  
           <CompA/>
    </FirstName.Provider>
    
  </>
  );
};

export default App;
export {FirstName};

