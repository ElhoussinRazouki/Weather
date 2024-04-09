import CardWeather from "../cardWeather/CardWeather"
import Header from "../header/Header"
import {TargetNameContext} from '../../App'
import Week from "../../pages/week/Week"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Today from "../../pages/today/Today"


const Container = () => {
  
  return (
    
    <div className="flex flex-col w-[100%]">
<Router><Header />
<Routes>
<Route path="/week" element={<Week/>}/>
<Route path="/Today" element={<Today/>}/>

</Routes>
  
  
  </Router>


    </div>
  )
}

export default Container