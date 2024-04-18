import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CardWeather from "../../components/cardWeather/CardWeather";
import { TargetNameContext } from "../../App";
import './week.css';

const Week = () => {
    const daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

    const { nameSearch } = useContext(TargetNameContext);

    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); 

        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 2;
        const currentYear = currentDate.getFullYear();

        const arrayWeek = [];
        const arrayIcon = [];
        const arrayDay = [];
        const arrayDog = [];

        const requests = [];

        for (let i = 0; i < 7; i++) {
            const date = `${currentYear}-${currentMonth}-${currentDay + i}`;
            const apiUrl = `http://api.weatherapi.com/v1/future.json?key=c1bec0851048438285410716241804&q=${nameSearch}&dt=${date}`;
            const request = axios.get(apiUrl); 
            requests.push(request); 
        }

        Promise.all(requests)
            .then(responses => {
                responses.forEach(res => {
                    arrayWeek.push(res.data.forecast.forecastday[0]);
                 
                    
                });
                setWeatherData(arrayWeek); 
                setLoading(false); 
            })
            .catch(error => {
                setError(error); 
                setLoading(false); 
            });
    }, [nameSearch]);

    if (loading) return <div className="loader  text-center  absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-8 w-full flex flex-col justify-between h-[100%]">
            <div>
                <ul className="flex justify-between gap-2">
                    {weatherData.map((data, index) => (
                        <CardWeather key={index} imgW={data.day.condition.icon}  day={daysOfWeek[new Date(data.date).getDay()]} dog={data.day.avgtemp_c}/>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-[Solomon-Bold]">Today's Highlights</h3>
            </div>
            <div></div>
        </div>
    );
};

export default Week;
