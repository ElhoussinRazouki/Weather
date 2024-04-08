import CardWeather from "../cardWeather/CardWeather"
import Header from "../header/Header"
import {TargetNameContext} from '../../App'
import Week from "../../pages/week/Week"


const Container = () => {
  
  return (
    <div className="flex flex-col w-[100%]">
<Header />
  <Week/>

    </div>
  )
}

export default Container