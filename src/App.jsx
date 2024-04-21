import { createContext, useState } from "react";
import Container from "./components/container/Container";
import Sidebar from "./components/sidebar/Sidebar";

export const TargetNameContext=createContext(null);
export const TargetTempContext=createContext(null);

function App() {

const [nameSearch,setNameSearch]=useState("khemisset");
const [typeTemp,setTypeTemp]=useState(true);
const searchName={nameSearch,setNameSearch};
const temp={typeTemp,setTypeTemp}; 

  return (
    <TargetNameContext.Provider value={searchName} >
  < TargetTempContext.Provider value={temp} >
  <div className="flex rounded-3xl  box-border bg-[#F6F6F8] w-[1200px] h-[550px]"><Sidebar/><Container/>
  
  </div> 
  
   
      </TargetTempContext.Provider>
      </TargetNameContext.Provider>
    
  )
}

export default App
