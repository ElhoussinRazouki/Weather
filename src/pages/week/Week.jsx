import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TargetNameContext } from "../../App";
import CardWeather from "../../components/cardWeather/CardWeather";
import loc from "../../assets/loc.png";
import Sunset from "../../assets/Sunset.png";
import Sunrise from "../../assets/Sunset.png";

   
const Week = () => {
  const daysWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const { nameSearch } = useContext(TargetNameContext);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [current, setCurrent] = useState([]);
  const [air, setAir] = useState("");
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=2d51565d96084b18afe193249241804&q=${nameSearch}&days=7&aqi=yes&alerts=no`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setDaysOfWeek(res.data.forecast.forecastday);
        setCurrent(res.data.current);
        setAir(res.data.current.air_quality.co);
        console.log(current.air_quality.co);
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
          <li className="relative flex flex-col pl-5 py-5 bg-white w-64  h-32 rounded-xl justify-between text-start overflow-hidden ">
            <p className="font-bold text-slate-400 ">UV Index</p>
            <div className=" border-2 b rounded-full h-32  w-36 clip-half "></div>
            <p className="">
              {daysOfWeek.length ? daysOfWeek[0].day.uv : "??"}
            </p>
          </li>
          <li className=" flex flex-col pl-5 py-2  bg-white w-64 justify-between  h-32 rounded-xl ">
            <p className="font-bold text-slate-400 ">Wind Status</p>

            <p className="text-2xl">
              {current.wind_kph} <span className="text-sm">km/h</span>
            </p>
            <p className="text-2xl flex gap-5">
              <img className="w-6 object-cover rounded-full" src={loc} alt="" />{" "}
              {current.wind_dir}{" "}
            </p>
          </li>
          <li className=" flex flex-col pl-5 py-2 bg-white w-64  h-32 rounded-xl justify-between ">
            <p className="font-bold text-slate-400 ">Sunrise & Sunset</p>

            <div className="flex flex-col">
              <div className="flex items-center">
                <img src={Sunrise} alt="" className="w-10 rotate-180" />{" "}
                
                <div>
                <p>{daysOfWeek.length && daysOfWeek[0].astro.sunrise}</p>
                  <p></p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={Sunset} alt="" className="w-10" />{" "}
                <div>
                  <p>{daysOfWeek.length && daysOfWeek[0].astro.sunset}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </li>
          <li className=" flex flex-col pl-5 py-2 bg-white w-64  h-32 rounded-xl justify-between">
            <p className="font-bold text-slate-400 ">Humidity</p>
            <p className="relative  text-4xl ">{current.humidity} <span className="text-sm absolute top-0 ">%</span></p>
            <p>Normal 👍</p>
                      </li>
          <li className=" flex flex-col pl-5 py-2 bg-white w-64  h-32 rounded-xl justify-between ">
            <p className="font-bold text-slate-400 ">Visibility</p>
            <p className="text-4xl">{daysOfWeek.length && daysOfWeek[0].hour[0].vis_km} <span className="text-xl">km</span> </p>
            <p>
            Average 😞
            </p>
          </li>
          <li className=" flex flex-col pl-5 py-2 bg-white w-64  h-32 rounded-xl  justify-between">
            <p className="font-bold text-slate-400 ">Air Quality</p>
            <p className="text-4xl">{air}</p>
            <p>Unhealthy 👎</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Week;
