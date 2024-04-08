import { createContext, useState } from "react";
import Container from "./components/container/Container";
import Sidebar from "./components/sidebar/Sidebar";

export const TargetNameContext=createContext(null);

function App() {
const [nameSearch,setNameSearch]=useState("khemisset");
const searchName={nameSearch,setNameSearch};
  return (<div className="p-8 flex justify-center items-center h-[100vh]">
    <TargetNameContext.Provider value={searchName} >
     
  <div className="flex rounded-3xl  box-border bg-[#F6F6F8] w-[1200px] h-[550px]"><Sidebar/><Container/>
  
  </div> 
  
   
      </TargetNameContext.Provider></div>
    
  )
}

export default App
