import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CardWeather from "../../components/cardWeather/CardWeather";
import {TargetNameContext} from '../../App'
import { Container } from "postcss";


const Week = () => {
    
const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
// for (let i = 0; i < 7; i++) {
// console.log( new Date().getFullYear()+"/"+(new Date().getMonth()+1) +"/"+(new Date().getDay() +i));

// }

const { nameSearch } = useContext(TargetNameContext);
const [weatherData, setWeatherData] = useState([]);
const [resultWeek, setResultWeek] = useState([]);
const [iconCard, setIconCard] = useState([]);
const [dayCard, setDayCard] = useState([]);
const [dogCard, setDogCard] = useState([]);







useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 2;
    const currentYear = currentDate.getFullYear();
const arrayWeek=[];
    for (let i = 0; i < 7; i++) {
        const date = `${currentYear}-${currentMonth}-${currentDay + i}`;
        const apiUrl = `https://api.weatherapi.com/v1/future.json?key=570663d036e449f4b69223704240304&q=${nameSearch}&dt=${date}`;
        axios.get(apiUrl).then((res)=>
        {
          
          

        });
    }
    // setResultWeek(arrayWeek);
  
    // console.log(resultWeek); 
}, [nameSearch]);



  return (
    <>
     <div className="p-8 w-full flex flex-col justify-between h-[100%]">
     <div>
        <ul className="flex justify-between gap-2">
        {/* {[...Array(7).keys()].map((index) => (
              <li key={index}>{  <CardWeather day={resultWeek[index]}/>}</li>
            ))} */}
       
        {
          resultWeek.map((res)=>console.log(res))
        }
        
    </ul>
      </div>
      <div>
         <h3  className="font-[Solomon-Bold]">Today's Highlights</h3>
      </div>
      <div></div>
     </div>
    </>
  );
};

export default Week;
