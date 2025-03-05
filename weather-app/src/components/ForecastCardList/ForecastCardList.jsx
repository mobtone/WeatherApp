import { useEffect, useState } from 'react';
import { getWeatherData } from '../../services/WeatherService';
import ForecastItem from '../ForecastItem/ForecastItem';
import './ForecastCardList.css';

const ForecastCardList = ({location}) => {

    const [forecast, setForecast] = useState([]);

useEffect(() => {
    const getForecast = async () =>{
        const data = await getWeatherData(location, "forecast");

//Här bearbetas api-responsen för att extrahera egenskaper från json-arrayen.
//Eftersom att apiet-returnerar prognoser för var 3e-timme i min endpoint så måste
//jag gruppera datan dag för dag för att kunna visa korrekt datum till väder i prognosen

    const groupedForecast = [];
    const dates = new Set();

    data.list.forEach((entry) =>{
        const entryDate = new Date(entry.dt * 1000).toLocaleDateString();
        if (!dates.has(entryDate)) {
            dates.add(entryDate);
            groupedForecast.push({
                date: entryDate,
                minTemp: entry.main.temp_min,
                maxTemp: entry.main.temp_max,
                icon: entry.weather[0].icon,
            });
        }
    });

    setForecast(groupedForecast.slice(0,6)); //Visar de nästkommande 5 unika dagarna
};

    getForecast();
}, [location]);

    return(
        <>
        <div className = "forecastContainer">
            {forecast.map((day, index) => (
               <ForecastItem key ={index} item = {day} />
         ))}
         </div>
         </>
    );
};

export default ForecastCardList;