import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import sniper from "../../assets/targets.png";
import {TargetNameContext} from '../../App'
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Sidebar = () => {

  const {setNameSearch}=useContext(TargetNameContext)
  const SearchValue = useRef();

  const [targetName, setTargetName] = useState("Morocco");
  const [temp, setTemp] = useState(12);
  const [date, setDate] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinute, setTimeMinute] = useState(0);
  const [condition,setCondition]=useState("");
  const [icon,setIcon]=useState("");
  const [imgIcon,setImgIcon]=useState("");
  const [location,setLocation]=useState("");
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=2d51565d96084b18afe193249241804&q=${targetName}&days=7&aqi=no&alerts=n`;


  useEffect(() => {
    axios
      .get(
        

apiUrl      )
      .then((res) => {
        setTemp(res.data.current.temp_c);
        setDate(new Date(res.data.current.last_updated).getDay())
        setTimeHours(new Date(res.data.current.last_updated).getHours())
        setTimeMinute(new Date(res.data.current.last_updated).getMinutes())
        setCondition(res.data.current.condition.text)
        setIcon(res.data.current.condition.icon)
        setImgIcon(res.data.forecast.forecastday[0].day.condition.icon)

        setLocation(res.data.location)
        setNameSearch(targetName.length?targetName : "Morocco");
        console.log(res.data.forecast.forecastday.day.condition.icon);
      })
      .catch((error) => console.log(error));
  }, [targetName]);

  return (
    <>
      <div className="flex  bg-white w-[50%] sm:w-[30%] flex-col rounded-l-3xl items-start py-6 px-6 gap-2 box-border  ">
        <form className="w-full pb-3 " onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-black dark:text-black "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full outline-none p-4  ps-10 text-xs text-gray-900  placeholder-black border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for places ..."
              ref={SearchValue}
            />
            <button
              type="submit"
              className=" absolute end-0 bottom-0   bg-slate-100  rounded-full"
              onClick={() => setTargetName(SearchValue.current.value)}
            >
              <img src={sniper} alt="" className="w-6 m-3" />
            </button>
          </div>
        </form>

        <div className="flex justify-center">
          <img
            src={imgIcon}
            alt=""
            className="w-36  object-cover "
          />
        </div>
        <div className="text-4xl relative">
          <h1 className=" py-1">
            {temp}
            <span className="absolute text-[28px] top-0">°C</span> 
          </h1>
         <div className="flex gap-2">
          <p className="text-lg space-x-4"> {days[date]}, </p><span className="text-lg text-slate-500">  {timeHours}:{timeMinute}</span>
         </div>
        </div>
        <div className="w-full border-b-2 my-5"></div>
        <div >
          <div className="flex gap-1 items-center text-[10px]"><img src={icon} alt="" className="w-6"/>
            {condition}</div>
        </div>
        <div className="flex gap-1 items-center text-[10px]"><img src={icon} alt="" className="w-6"/>
            {condition}</div>
        <div className="relative w-full flex justify-center">
          <img className="rounded-xl w-52 h-20" src= "https://s.w-x.co/util/image/v/719_Urban_Heat_Ari_1280x720_3092037615.jpg?v=at&w=815&h=458" alt="" />
          <p className="absolute  object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-center w-full font-mono"><span >{`${location.name} , ${location.country}`}</span>
</p>
          </div>
        
      </div>
    </>
  );
};

export default Sidebar;