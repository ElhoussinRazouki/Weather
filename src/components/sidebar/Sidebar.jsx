import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import sniper from "../../assets/targets.png"

const Sidebar = () => {
  const SearchValue=useRef();

  const [contry,setCountry]=useState("");
  useEffect(()=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=570663d036e449f4b69223704240304&q=${contry}&aqi=no`).
    then((res)=>(
      console.log(res.data)
    )).
    catch((res)=>console.log(res))

  },[contry])

  return (
    <>
    <div className="flex h-[100vh] bg-white w-[50%] sm:w-[30%] flex-col items-center py-12 px-12 ">
    <form className="w-full " onSubmit={  (e)=>(e.preventDefault())}>
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
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
      className="block w-full outline-none p-4 ps-10 text-xs text-gray-900  placeholder-black border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search for places ..."
    ref={SearchValue}
      
    />
    <button
      type="submit"
      className=" absolute end-0 bottom-0   bg-slate-100  rounded-full"
      
      onClick={()=>setCountry(SearchValue.current.value)}
      
    >
     <img src={sniper} alt="" className="w-6 m-3" />
    </button>
  </div>
</form>

        
        
    </div>
      
    </>
  )
}

export default Sidebar
