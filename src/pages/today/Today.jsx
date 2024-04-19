import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {TargetNameContext} from "../../App";
const Today = () => {
  const { nameSearch } = useContext(TargetNameContext);
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=2d51565d96084b18afe193249241804&q=${nameSearch}&days=7&aqi=no&alerts=n`;

  useEffect(()=>{
  axios.get(apiUrl).then((res)=>
    {
        


    }  
    
    ).catch(error => console.log(error))
   },[nameSearch] )
  return (
    <div className=" w-full flex flex-col justify-center items-center h-[100%]">
      <div className="shadow-xl w-3/4 ">
        <div className="flex p-4 justify-between border-b border-slate-500"><p>CURRENT WEATHER</p><p>dad</p></div>
        <div>
csc
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Today;
