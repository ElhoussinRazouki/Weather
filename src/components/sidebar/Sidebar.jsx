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
  const [location,setLocation]=useState("");


  useEffect(() => {
    axios
      .get(
        
        `http://api.weatherapi.com/v1/current.json?key=c1bec0851048438285410716241804&q=${targetName}&aqi=no`
      )
      .then((res) => {
        setTemp(res.data.current.temp_c);
        setDate(new Date(res.data.current.last_updated).getDay())
        setTimeHours(new Date(res.data.current.last_updated).getHours())
        setTimeMinute(new Date(res.data.current.last_updated).getMinutes())
        setCondition(res.data.current.condition.text)
        setIcon(res.data.current.condition.icon)
        setLocation(res.data.location)
        setNameSearch(targetName.length?targetName : "Morocco");
        console.log(timeMinute);
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

        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-40"
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
          <img className="rounded-xl w-52 h-20" src="https://s.w-x.co/util/image/v/719_Urban_Heat_Ari_1280x720_3092037615.jpg?v=at&w=815&h=458" alt="" />
          <p className="absolute  object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-center w-full"><span >{`${location.name} , ${location.country}`}</span>
</p>
          </div>
        
      </div>
    </>
  );
};

export default Sidebar;
