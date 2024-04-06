import { useState } from "react";
import CardWeather from "../../components/cardWeather/CardWeather";

const Week = ({ detailWeek }) => {
  const [week, setWeek] = useState({});
  useState(() => {
    setWeek({detailWeek})
  }, [detailWeek]);
  return (
    <>
     <div className="p-16">
     <div>
        <ul>
        {week.map((res) => (
          
            <li key={res.index}><CardWeather /></li>
          
        ))}</ul>
      </div>
      <div>
         
      </div>
     </div>
    </>
  );
};

export default Week;
