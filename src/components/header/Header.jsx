import { NavLink } from "react-router-dom"
import avatar from "../../assets/avatar.png"
const dog = ["°C", '°F' ];
const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-end h-16 px-16 w-full">
        <ul className="flex font-bold text-xl gap-10">
          <li > <a href="/Today" className="text-slate-400  active:text-black">Today</a > </li>
          <li> <a href="/Week" className="text-slate-400 active:text-black" >Week</a > </li>
          
        </ul>
        <div className="flex gap-5 items-center">
          {dog.map((res,index)=>(<button key={index}  className="bg-slate-400 rounded-full w-8 h-8 text-center font-bold ">{res}</button>))}
         
         
         <img className="w-10 h-10 rounded object-coverml-7 cursor-pointer" src={avatar} alt="Rounded avatar"/>

        </div>
      </nav>
    </>
  )
}

export default Header
