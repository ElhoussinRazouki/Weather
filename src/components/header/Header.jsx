import { NavLink, Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "./header.css";
import { useState } from "react";
const Header = () => {
  const [activeClick, setActiveClick] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-end  h-16 px-8 w-full">
        <ul className="flex font-bold text-xl gap-6">
          <li>
            {" "}
            <NavLink to="/Today" className="text-slate-400  active:text-black">
              Today
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/Week" className="text-slate-400 active:text-blue-500">
              Week
            </NavLink>{" "}
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <button
            onClick={()=>setActiveClick(true)}
            className={
              activeClick
                ? "bg-black text-white rounded-full w-8 h-8 text-center font-bold "
                : "bg-white rounded-full w-8 h-8 text-center font-bold "
            }
          >
            °C
          </button>
          <button
            onClick={()=>setActiveClick(false)}
            className={
              activeClick
                ?"bg-white rounded-full w-8 h-8 text-center font-bold "
                :  "bg-black text-white rounded-full w-8 h-8 text-center font-bold "
            }
          >
            °F
          </button>

          <img
            className="w-10 h-10 rounded object-coverml-7 cursor-pointer ml-3"
            src={avatar}
            alt="Rounded avatar"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
