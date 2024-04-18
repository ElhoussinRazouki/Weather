import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TargetNameContext } from "../../App";
import CardWeather from "../../components/cardWeather/CardWeather";

const Week = () => {
    const daysWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
    const { nameSearch } = useContext(TargetNameContext);
    const [daysOfWeek,setDaysOfWeek]=useState([]);
    const apiUrl=`http://api.weatherapi.com/v1/forecast.json?key=2d51565d96084b18afe193249241804&q=${nameSearch}&days=7&aqi=no&alerts=n`
    
    useEffect(()=>{
      axios.get(apiUrl)
      .then((res)=>{
        setDaysOfWeek(res.data.forecast.forecastday);
        console.log(daysOfWeek);
    }).catch(error=>console.log(error))
    },[nameSearch]
    );
  return (
    <div className="p-8 w-full flex flex-col justify-between h-[100%] ">
    <div>
        <ul className="flex justify-between gap-2">
           
         {
            daysOfWeek.map((res,index)=>
            (
                <li key={index}><CardWeather day={daysWeek[new Date(res.date).getDay()]} dog={res.day.avgtemp_c} imgW={res.day.condition.icon} /></li>
            )
            )
         }
        </ul>
    </div>
    <div>
        <h3 className="font-[Solomon-Bold]">Today's Highlights</h3>
    </div>
    <div></div>
</div>
  )
}

export default Week
