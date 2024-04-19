import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TargetNameContext } from "../../App";
import CardWeather from "../../components/cardWeather/CardWeather";

const Week = () => {
  const daysWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const { nameSearch } = useContext(TargetNameContext);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [current, setCurrent] = useState([]);
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=2d51565d96084b18afe193249241804&q=${nameSearch}&days=7&aqi=no&alerts=n`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setDaysOfWeek(res.data.forecast.forecastday);
        setCurrent(res.data.current)
        console.log(daysOfWeek.day.uv)
      })
      .catch((error) => console.log(error));
  }, [nameSearch]);
  return (
    <div className="p-8 w-full flex flex-col justify-between h-[100%] ">
      <div>
        <ul className="flex justify-between gap-2">
          {daysOfWeek.map((res, index) => (
            <li key={index}>
              <CardWeather
                day={daysWeek[new Date(res.date).getDay()]}
                dog={res.day.avgtemp_c}
                imgW={res.day.condition.icon}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-[Solomon-Bold]">Today's Highlights</h3>
      </div>

      <div>
        <ul className="grid grid-cols-3  gap-3 ">
          <li className="relative flex flex-col p-3  bg-white w-64  h-32 rounded-xl justify-between text-start overflow-hidden ">
<p className="font-bold text-slate-400 ">UV Index</p>
<div className=" border-2 b rounded-full h-32  w-36 clip-half "></div>
            <p className="">{daysOfWeek.length?daysOfWeek[0].day.uv:"??"}</p>
          </li>
          <li className=" flex flex-col p-3   bg-white w-64 justify-between  h-32 rounded-xl ">
<p className="font-bold text-slate-400 ">Wind Status</p>
            
        <p className="text-2xl">{current.wind_kph} <span className="text-sm">km/h</span></p>    
        <p className="text-2xl"><img src="https://www.flaticon.com/fr/icone-gratuite/emplacement_3838966" alt="" />{current.wind_dir} </p>    
        
          </li>
          <li className=" flex flex-col p-3  bg-white w-64  h-32 rounded-xl ">
<p className="font-bold text-slate-400 ">Sunrise & Sunset</p>

            {" "}
          </li>
          <li className=" flex flex-col p-3  bg-white w-64  h-32 rounded-xl ">
<p className="font-bold text-slate-400 ">Humidity</p>

            {" "}
          </li>
          <li className=" flex flex-col p-3  bg-white w-64  h-32 rounded-xl ">
<p className="font-bold text-slate-400 ">Visibility</p>

            {" "}
          </li>
          <li className=" flex flex-col p-3  bg-white w-64  h-32 rounded-xl ">
<p className="font-bold text-slate-400 ">Air Quality</p>

            {" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Week;
